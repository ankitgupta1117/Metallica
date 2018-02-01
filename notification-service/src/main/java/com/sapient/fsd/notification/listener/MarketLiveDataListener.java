package com.sapient.fsd.notification.listener;

import com.sapient.fsd.common.events.MarketDataEvent;
import com.sapient.fsd.notification.events.MarketNotification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class MarketLiveDataListener {

    @Autowired
    SimpMessagingTemplate simpMessagingTemplate;

    @JmsListener(destination = "market.notification.queue")
    public void handleMarketEvents(MarketDataEvent marketDataEvent){
        simpMessagingTemplate.convertAndSend("/market/feeds", new MarketNotification(marketDataEvent));
    }
}
