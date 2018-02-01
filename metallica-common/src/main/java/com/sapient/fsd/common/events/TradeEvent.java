package com.sapient.fsd.common.events;

import java.io.Serializable;

/**
 * Created by agu187 on 1/16/2018.
 */
public class TradeEvent implements Serializable{
    private TradeEventType eventType;
    private String payload;

    public TradeEvent(){

    }

    public TradeEvent(TradeEventType eventType, String payload) {
        this.eventType = eventType;
        this.payload = payload;
    }

    public TradeEventType getEventType() {
        return eventType;
    }

    public void setEventType(TradeEventType eventType) {
        this.eventType = eventType;
    }

    public String getPayload() {
        return payload;
    }

    public void setPayload(String payload) {
        this.payload = payload;
    }
}

