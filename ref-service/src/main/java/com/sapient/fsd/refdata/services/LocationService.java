package com.sapient.fsd.refdata.services;

import com.sapient.fsd.refdata.entities.Location;
import com.sapient.fsd.refdata.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by agu187 on 1/13/2018.
 */
//@Service
public class LocationService {

    @Autowired
    LocationRepository locationRepository;

    public List<Location> getAllLocations(){
        List<Location> result = new ArrayList<Location>();
        locationRepository.findAll()
                .forEach(result::add);
        return result;
    }

    public Location findById(String id){

        return locationRepository.findOne(id);
    }


}
