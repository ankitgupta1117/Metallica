package com.sapient.fsd.notification.listener;

import com.sapient.fsd.common.events.TradeEvent;
import com.sapient.fsd.notification.events.TradeNotification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class TradeEventListener {

    @Autowired
    SimpMessagingTemplate simpMessagingTemplate;

    @JmsListener(destination = "trades.notification.queue")
    public void handleTradeEvents(TradeEvent event){
        this.simpMessagingTemplate.convertAndSend("/trade/feeds", new TradeNotification(event));
    }

}
