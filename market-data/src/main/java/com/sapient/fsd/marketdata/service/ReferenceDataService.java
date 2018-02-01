package com.sapient.fsd.marketdata.service;

import com.netflix.appinfo.InstanceInfo;
import com.netflix.discovery.EurekaClient;
import com.sapient.fsd.common.models.Commodity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.hateoas.Resources;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by agu187 on 1/16/2018.
 */
@Service
@RefreshScope
public class ReferenceDataService {

    @Autowired
    private EurekaClient eurekaClient;
    @Value("${reference.service.id}")
    private String referenceServiceId;
    @Autowired
    private RestTemplate restTemplate;

    private String getRefServiceUrl(){
        String url="";
        List<InstanceInfo> instances = eurekaClient.getApplication(referenceServiceId).getInstances();
        if(null != instances && instances.size()>0){
            url = instances.get(0).getIPAddr() + ":" + Integer.toString(instances.get(0).getPort());
        }
        return url;
    }


    public List<String> getAllCommodities(){
        ParameterizedTypeReference<Resources<Commodity>> ptr = new ParameterizedTypeReference<Resources<Commodity>>(){};
        ResponseEntity<Resources<Commodity>> response = restTemplate.exchange("http://"+getRefServiceUrl()+"/commodities/", HttpMethod.GET,null,ptr);
        return response.getBody()
                .getContent()
                .stream()
                .map(Commodity::getCode)
                .collect(Collectors.toList());
    }

}
