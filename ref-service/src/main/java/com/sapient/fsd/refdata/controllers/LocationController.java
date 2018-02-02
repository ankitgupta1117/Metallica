package com.sapient.fsd.refdata.controllers;

import com.sapient.fsd.refdata.entities.LocationEntity;
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
@RestController
@RequestMapping("/location")
public class LocationController {

    @Autowired
    private LocationService locationService;

    @GetMapping("list")
    public List<LocationEntity> listCounterParties(){
        return locationService.getAllLocations();
    }

    @GetMapping("search")
    public LocationEntity searchById(@Param("code") String code){
        if(StringUtils.isEmpty(code)){
            return null;
        }
        return locationService.findById(code);
    }
}
