package com.sapient.fsd.notification.events;

import com.sapient.fsd.common.events.TradeEvent;

import java.io.Serializable;

/**
 * Created by agu187 on 1/26/2018.
 */
public class TradeNotification implements Serializable{

    private TradeEvent event;

    public TradeNotification(TradeEvent event) {
        this.event = event;
    }

    public TradeNotification(){

    }

    public TradeEvent getEvent() {
        return event;
    }

    public void setEvent(TradeEvent event) {
        this.event = event;
    }
}
