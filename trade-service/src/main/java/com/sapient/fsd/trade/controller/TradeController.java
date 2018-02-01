package com.sapient.fsd.trade.controller;

import com.sapient.fsd.trade.entities.Trade;
import com.sapient.fsd.trade.exceptions.InvalidTradeRequestException;
import com.sapient.fsd.trade.models.CreateTradeRequest;
import com.sapient.fsd.trade.models.TradeVO;
import com.sapient.fsd.trade.services.TradeService;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by agu187 on 1/15/2018.
 */
@RestController
@RequestMapping("/trades")
public class TradeController {

    @Autowired
    private TradeService tradeService;
    private static final Logger LOG = LoggerFactory.getLogger(TradeController.class);

    @RequestMapping("search")
    public List<TradeVO> searchTrades(@RequestParam(value = "from", required = false) String fromDate,
                                      @RequestParam(value = "to", required = false) String toDate,
                                      @RequestParam(value = "commcd", required = false) String commodity_cd,
                                      @RequestParam(value = "side", required = false) String side,
                                      @RequestParam(value = "cntrPrty", required = false) String counterParty,
                                      @RequestParam(value = "loc", required = false) String location){

        return tradeService.search(side, commodity_cd, counterParty, location, fromDate, toDate);
    }
    @PostMapping()
    public void createTrade(@RequestBody CreateTradeRequest createTradeRequest) throws InvalidTradeRequestException {
        if(validate(createTradeRequest)){
            tradeService.createTrade(createTradeRequest);
        }else{
            LOG.error("Invalid create trade request received. "+createTradeRequest);
            throw new InvalidTradeRequestException("Invalid create trade request recieved.");
        }
    }

    @GetMapping()
    public TradeVO getTrade(@RequestParam String id){
        return tradeService.getTrade(Long.valueOf(id));
    }

    @DeleteMapping()
    public void deleteTrade(@RequestParam String id){
        tradeService.deleteTrade(Long.valueOf(id));
    }
    private boolean validate(CreateTradeRequest request) {
        if(StringUtils.isNotBlank(request.getSide())
                && StringUtils.isNotBlank(request.getCntrParty())
                && StringUtils.isNotBlank(request.getCommodity())
                && StringUtils.isNotBlank(request.getLocation())
                && (null != request.getPrice() && request.getPrice() > 0)
                && StringUtils.isNotBlank(request.getTradeDate())
                && (null != request.getQuantity() && request.getQuantity() > 0)) {
            // Request is valid.
            return true;
        }else{
            return false;
        }

    }

}
