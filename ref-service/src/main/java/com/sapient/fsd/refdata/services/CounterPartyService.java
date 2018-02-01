package com.sapient.fsd.refdata.services;

import com.sapient.fsd.refdata.entities.CounterParty;
import com.sapient.fsd.refdata.repositories.CounterPartyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by agu187 on 1/13/2018.
 */
//@Service
public class CounterPartyService {

    @Autowired
    CounterPartyRepository counterPartyRepository;

    public List<CounterParty> getAllCounterParties(){
        List<CounterParty> result = new ArrayList<CounterParty>();
        counterPartyRepository.findAll()
                .forEach(result::add);
        return result;
    }

    public CounterParty findById(String id){
        return counterPartyRepository.findOne(id);
    }


}
