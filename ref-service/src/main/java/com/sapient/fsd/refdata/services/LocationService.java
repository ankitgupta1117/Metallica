package com.sapient.fsd.refdata.services;

import com.sapient.fsd.refdata.entities.LocationEntity;
import com.sapient.fsd.refdata.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by agu187 on 1/13/2018.
 */
@Service
public class LocationService {

    @Autowired
    LocationRepository locationRepository;

    public List<LocationEntity> getAllLocations(){
        List<LocationEntity> result = new ArrayList<LocationEntity>();
        locationRepository.findAll()
                .forEach(result::add);
        return result;
    }

    public LocationEntity findById(String id){

        return locationRepository.findOne(id);
    }


}
