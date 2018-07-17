package com.sapient.fsd.trade.services;

import com.sapient.fsd.trade.entities.Trade;
import com.sapient.fsd.trade.exceptions.TradeException;
import com.sapient.fsd.trade.models.CreateTradeRequest;
import com.sapient.fsd.trade.models.TradeVO;
import com.sapient.fsd.trade.models.UpdateTradeRequest;
import com.sapient.fsd.trade.repository.SearchTradeDao;
import com.sapient.fsd.trade.repository.TradeRepository;
import com.sapient.fsd.trade.utils.DateTimeUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by agu187 on 1/15/2018.
 */
@Service
public class TradeService {
    private static final Logger LOG = LoggerFactory.getLogger(TradeService.class);
    private static final String STATUS_OPEN = "Open";


    private SearchTradeDao searchTradeDao;
    private TradeRepository tradeRepository;
    private JmsNotifier jmsNotifier;

    public TradeService(@Autowired SearchTradeDao searchTradeDao,
                        @Autowired TradeRepository tradeRepository,
                        @Autowired JmsNotifier jmsNotifier) {
        this.searchTradeDao = searchTradeDao;
        this.tradeRepository = tradeRepository;
        this.jmsNotifier = jmsNotifier;
    }

    public List<TradeVO> search(String side, String commodity, String counterParty, String location, String startDate, String endDate){
        List<Trade> tradeFromDb  =  searchTradeDao.searchTradeFromDb(side, commodity, counterParty, location, startDate, endDate);
        List<TradeVO> result = new ArrayList<>(tradeFromDb.size());
        tradeFromDb.forEach( t -> {
            TradeVO tradeVO = new TradeVO(t.getId(), t.getSide(), t.getPrice(), t.getQuantity(), t.getStatus(), t.getCntrPartyCd(),
                    t.getCommodityCd(),
                    t.getLocationCd(),
                    DateTimeUtils.formatDate(t.getTradeDate()));
            result.add(tradeVO);
        });

        return result;
    }

    @Transactional
    public void createTrade(CreateTradeRequest request){
        LocalDateTime tradeDate;
        try{
            tradeDate = DateTimeUtils.parseDate(request.getTradeDate());
        }catch (DateTimeParseException e){
            LOG.error("Unable to parse trade date "+request.getTradeDate());
            throw new TradeException("Unable to create trade as the trade date passed is invalid. Trade date passed is: "+request.getTradeDate());
        }
        Trade trade = new Trade(request.getSide(), request.getCommodity(), request.getCntrParty(),
                request.getLocation(), tradeDate, request.getPrice(), request.getQuantity(), STATUS_OPEN);
        trade = tradeRepository.save(trade);
        jmsNotifier.sendTradeCreationEvent(trade.getId());
    }

    @Transactional
    public void deleteTrade(Long tradeId){
        tradeRepository.delete(tradeId);
        jmsNotifier.sendTradeDeletionEvent(tradeId);
    }

    @Transactional
    public void updateTrade(UpdateTradeRequest request){
        LocalDateTime tradeDate;
        try{
            tradeDate = DateTimeUtils.parseDate(request.getTradeDate());
        }catch (DateTimeParseException e){
            LOG.error("Unable to parse trade date "+request.getTradeDate());
            throw new TradeException("Unable to update trade as the trade date passed is invalid. Trade date passed is: "+request.getTradeDate());
        }
        Trade trade = new Trade(request.getSide(), request.getCommodity(), request.getCntrParty(),
                request.getLocation(), tradeDate, request.getPrice(), request.getQuantity(), request.getStatus());
        trade.setId(request.getId());
        Trade updatedTrade =tradeRepository.save(trade);
        jmsNotifier.sendTradeUpdateEvent(updatedTrade.getId());
    }

    public TradeVO getTrade(Long tradeId){
        Trade result = tradeRepository.findOne(tradeId);
        if(result == null){
            throw new TradeException("No trades found with trade ID="+tradeId);
        }
        TradeVO tradeVO = new TradeVO(result.getId(), result.getSide(), result.getPrice(), result.getQuantity(),
                result.getStatus(), result.getCntrPartyCd(), result.getCommodityCd(),result.getLocationCd()
                ,DateTimeUtils.formatDate(result.getTradeDate()));
        return tradeVO;
    }

}
