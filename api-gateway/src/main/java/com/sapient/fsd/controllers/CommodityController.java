package com.sapient.fsd.controllers;

import com.sapient.fsd.models.Commodity;
import org.apache.commons.lang3.StringUtils;
import org.jboss.logging.Param;
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

import javax.jws.WebMethod;
import javax.jws.WebParam;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by agu187 on 1/13/2018.
 */
@RestController
@RequestMapping("/commodity")
public class CommodityController {

    @Autowired
    private RestTemplate template;

    @GetMapping("list")
    public List<Commodity> listCommodities(){
        ParameterizedTypeReference<Resources<Commodity>> ptr = new ParameterizedTypeReference<Resources<Commodity>>() {
        };
        ResponseEntity<Resources<Commodity>> response = template.exchange("http://localhost/ref/commodities",HttpMethod.GET,null, ptr);
        return response
                .getBody()
                .getContent()
                .stream()
                .collect(Collectors.toList());
    }

    @GetMapping("search")
    public Commodity searchByCode(@RequestParam(value = "code") String code){
        if(StringUtils.isEmpty(code)){
            return null;
        }
        ParameterizedTypeReference<Resource<Commodity>> ptr = new ParameterizedTypeReference<Resource<Commodity>>() {
        };
        ResponseEntity<Resource<Commodity>> response = template.exchange("http://localhost/ref/commodities/"+code,HttpMethod.GET,null, ptr);
        return response
                .getBody()
                .getContent();
    }
}
