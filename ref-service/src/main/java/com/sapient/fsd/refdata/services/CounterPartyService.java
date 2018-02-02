package com.sapient.fsd.refdata.services;

import com.sapient.fsd.refdata.entities.CounterPartyEntity;
import com.sapient.fsd.refdata.repositories.CounterPartyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by agu187 on 1/13/2018.
 */
@Service
public class CounterPartyService {

    @Autowired
    CounterPartyRepository counterPartyRepository;

    public List<CounterPartyEntity> getAllCounterParties(){
        List<CounterPartyEntity> result = new ArrayList<CounterPartyEntity>();
        counterPartyRepository.findAll()
                .forEach(result::add);
        return result;
    }

    public CounterPartyEntity findById(String id){
        return counterPartyRepository.findOne(id);
    }


}
