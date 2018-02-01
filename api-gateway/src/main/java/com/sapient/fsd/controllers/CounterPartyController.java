package com.sapient.fsd.controllers;

import com.sapient.fsd.models.CounterParty;
import com.sapient.fsd.models.Location;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.jws.WebParam;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by agu187 on 1/13/2018.
 */
@RestController
@RequestMapping("/counterparty")
public class CounterPartyController {

    @Autowired
    private RestTemplate template;

    @GetMapping("list")
    public List<CounterParty> listCounterParties(){
        ParameterizedTypeReference<Resources<CounterParty>> ptr = new ParameterizedTypeReference<Resources<CounterParty>>() {
        };
        ResponseEntity<Resources<CounterParty>> response = template.exchange("http://localhost/ref/counterParties", HttpMethod.GET,null, ptr);
        return response
                .getBody()
                .getContent()
                .stream()
                .collect(Collectors.toList());
    }

    @GetMapping("search")
    public CounterParty searchById(@RequestParam(value="id") String id) {
        if (StringUtils.isEmpty(id)) {
            return null;
        }
        ParameterizedTypeReference<Resource<CounterParty>> ptr = new ParameterizedTypeReference<Resource<CounterParty>>() {
        };
        ResponseEntity<Resource<CounterParty>> response = template.exchange("http://localhost/ref/counterParties/" + id, HttpMethod.GET, null, ptr);
        return response
                .getBody()
                .getContent();
    }
}
