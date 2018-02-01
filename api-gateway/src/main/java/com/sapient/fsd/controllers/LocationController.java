package com.sapient.fsd.controllers;

import com.sapient.fsd.models.Commodity;
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
@RequestMapping("/location")
public class LocationController {

    @Autowired
    private RestTemplate template;

    @GetMapping("list")
    public List<Location> listCounterParties(){
        ParameterizedTypeReference<Resources<Location>> ptr = new ParameterizedTypeReference<Resources<Location>>() {
        };
        ResponseEntity<Resources<Location>> response = template.exchange("http://localhost/ref/locations", HttpMethod.GET,null, ptr);
        return response
                .getBody()
                .getContent()
                .stream()
                .collect(Collectors.toList());
    }

    @GetMapping("search")
    public Location searchById(@RequestParam(value="code") String code){
        if(StringUtils.isEmpty(code)){
            return null;
        }
        ParameterizedTypeReference<Resource<Location>> ptr = new ParameterizedTypeReference<Resource<Location>>() {
        };
        ResponseEntity<Resource<Location>> response = template.exchange("http://localhost/ref/locations/"+code, HttpMethod.GET,null, ptr);
        return response
                .getBody()
                .getContent();
    }
}
