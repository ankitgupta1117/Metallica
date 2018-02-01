/*
package com.sapient.fsd.refdata.controllers;

import com.sapient.fsd.refdata.entities.Commodity;
import com.sapient.fsd.refdata.services.CommodityRefService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

*/
/**
 * Created by agu187 on 1/13/2018.
 *//*

//@RestController
//@RequestMapping("/commodity")
public class CommodityController {

    @Autowired
    private CommodityRefService commodityService;

    @GetMapping("list")
    public List<Commodity> listCommodities(){
        return commodityService.getAllCommodities();
    }

    @GetMapping("search")
    public Commodity searchByCode(@Param("code") String code){
        if(StringUtils.isEmpty(code)){
            return null;
        }

        return commodityService.findByCode(code);
    }
}
*/
