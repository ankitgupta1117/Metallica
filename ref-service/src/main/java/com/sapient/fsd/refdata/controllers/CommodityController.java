package com.sapient.fsd.refdata.controllers;

import com.sapient.fsd.common.models.Commodity;
import com.sapient.fsd.refdata.services.CommodityRefService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Rest controller for commodities reference data.
 * All endpoints for commodity starts with /commodity
 * Created by agu187 on 1/13/2018.
 */

@RestController
@RequestMapping("/commodity")
public class CommodityController {

    @Autowired
    private CommodityRefService commodityService;

    /**
     * Returns list of all the Commodities by invoking Commodity service.
     *
     * @return list of commodities
     */
    @GetMapping("list")
    public List<Commodity> listCommodities(){
        return commodityService.getAllCommodities();
    }

    /**
     * Search for a specific commodity code and returns corresponding Commodity
     *
     * @param code - Commodity code
     * @return - Commodity instance
     */
    @GetMapping("search")
    public Commodity searchByCode(@RequestParam("code") String code){
        if(StringUtils.isEmpty(code)){
            return null;
        }

        return commodityService.findByCode(code);
    }
}
