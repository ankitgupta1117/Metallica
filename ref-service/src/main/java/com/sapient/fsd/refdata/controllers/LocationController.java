package com.sapient.fsd.refdata.controllers;

import com.sapient.fsd.refdata.entities.CounterParty;
import com.sapient.fsd.refdata.entities.Location;
import com.sapient.fsd.refdata.services.CounterPartyService;
import com.sapient.fsd.refdata.services.LocationService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by agu187 on 1/13/2018.
 */
//@RestController
//@RequestMapping("/location")
public class LocationController {

    @Autowired
    private LocationService locationService;

    @GetMapping("list")
    public List<Location> listCounterParties(){
        return locationService.getAllLocations();
    }

    @GetMapping("search")
    public Location searchById(@Param("id") String id){
        if(StringUtils.isEmpty(id)){
            return null;
        }
        return locationService.findById(id);
    }
}
