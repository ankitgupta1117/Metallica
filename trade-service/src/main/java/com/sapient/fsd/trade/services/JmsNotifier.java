package com.sapient.fsd.trade.services;

import com.sapient.fsd.common.events.TradeEvent;
import com.sapient.fsd.common.events.TradeEventType;
import com.sapient.fsd.trade.entities.Trade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Component;

/**
 * Created by agu187 on 1/16/2018.
 */
@Component
public class JmsNotifier {

    @Autowired
    private JmsTemplate jmsTemplate;

    @Value("${trades.destination.queue.name}")
    private String destinationQueue;

    public void sendTradeCreationEvent(Long tradeId){
        jmsTemplate.convertAndSend(destinationQueue,new TradeEvent(TradeEventType.CREATE, tradeId.toString()));
    }

    public void sendTradeDeletionEvent(Long tradeId){
        jmsTemplate.convertAndSend(destinationQueue, new TradeEvent(TradeEventType.DELETE, tradeId.toString()));
    }

    public void sendTradeUpdateEvent(Long tradeId){
        jmsTemplate.convertAndSend(destinationQueue, new TradeEvent(TradeEventType.UPDATE, tradeId.toString()));
    }

}
