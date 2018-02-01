package com.sapient.fsd.marketdata.service;


import com.netflix.discovery.converters.Auto;
import com.sapient.fsd.common.events.MarketDataEvent;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class MarketDataService {

    private List<String> commodities = new ArrayList<>();
    @Autowired
    private ReferenceDataService refService;
    @Autowired
    private JmsTemplate jmsTemplate;

    @Value("${market-data.destination.queue.name}")
    private String destinationQueue;

    @PostConstruct
    public void init(){
        commodities = refService.getAllCommodities();
    }

    @Scheduled(fixedDelay = 500)
    public void marketDate(){
        Random r = new Random();
        int price  = r.nextInt(20)+90;
        int commodityIdx  = r.nextInt(5)%5;
        String commodity = commodities.get(commodityIdx);
        if(StringUtils.isNotBlank(commodity)){
            MarketDataEvent event = new MarketDataEvent(commodity, price);
            jmsTemplate.convertAndSend(destinationQueue, event);
        }
    }

}
