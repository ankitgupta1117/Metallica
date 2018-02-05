package com.sapient.fsd.refdata.controllers;

import com.sapient.fsd.refdata.entities.CounterPartyEntity;
import com.sapient.fsd.refdata.services.CounterPartyService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 *
 * Created by agu187 on 1/13/2018.
 */
@RestController
@RequestMapping("/counterparty")
public class CounterPartyController {

    @Autowired
    private CounterPartyService counterPartyService;

    /**
     * Lists all the counter parties present in repository
     * @return list of counterparty instances
     */
    @GetMapping("list")
    public List<CounterPartyEntity> listCounterParties(){
        return counterPartyService.getAllCounterParties();
    }

    /**
     * Returns the counterparty entity for a specific ID
     * @param id - counterparty Id
     * @return - counterparty instance
     */
    @GetMapping("search")
    public CounterPartyEntity searchById(@Param("id") String id){
        if(StringUtils.isEmpty(id)){
            return null;
        }
        return counterPartyService.findById(id);
    }
}
