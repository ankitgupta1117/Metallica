package com.sapient.fsd.refdata.services;

import com.sapient.fsd.refdata.entities.Commodity;
import com.sapient.fsd.refdata.repositories.CommodityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by agu187 on 1/13/2018.
 */
/*
//@Service
public class CommodityRefService {

    @Autowired
    CommodityRepository commodityRepository;

    public List<Commodity> getAllCommodities(){
        List<Commodity> result = new ArrayList<Commodity>();
        commodityRepository.findAll()
                .forEach(result::add);
        return result;
    }

    */
/*public Commodity findByCode(String code){
        return commodityRepository.findOne(code);
    }
*//*


}
*/
