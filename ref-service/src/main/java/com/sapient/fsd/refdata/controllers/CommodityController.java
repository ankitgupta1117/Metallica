package com.sapient.fsd.refdata.controllers;/*
package com.sapient.fsd.refdata.controllers;

import com.sapient.fsd.refdata.entities.CommodityEntity;
import com.sapient.fsd.refdata.services.CommodityRefService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repositories.query.Param;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

*/

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
 * Created by agu187 on 1/13/2018.
 */

@RestController
@RequestMapping("/commodity")
public class CommodityController {

    @Autowired
    private CommodityRefService commodityService;

    @GetMapping("list")
    public List<Commodity> listCommodities(){
        return commodityService.getAllCommodities();
    }

    @GetMapping("search")
    public Commodity searchByCode(@RequestParam("code") String code){
        if(StringUtils.isEmpty(code)){
            return null;
        }

        return commodityService.findByCode(code);
    }
}
