package com.sapient.fsd.refdata.services;

import com.sapient.fsd.common.models.Commodity;
import com.sapient.fsd.refdata.entities.CommodityEntity;
import com.sapient.fsd.refdata.repositories.CommodityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

/**
 * Created by agu187 on 1/13/2018.
 */

@Service
public class CommodityRefService {

    @Autowired
    CommodityRepository commodityRepository;

    public List<Commodity> getAllCommodities(){
        List<CommodityEntity> result = new ArrayList<CommodityEntity>();
        commodityRepository.findAll()
                .forEach(result::add);
        return result
                .stream()
                .map((commodityEntity -> {
                    return new Commodity(commodityEntity.getCode(), commodityEntity.getDescription());
                    }))
                .collect(Collectors.toList());
    }



public Commodity findByCode(String code){
        CommodityEntity commodityEntity =  commodityRepository.findByCode(code);
        return new Commodity(commodityEntity.getCode(), commodityEntity.getDescription());
    }


}
