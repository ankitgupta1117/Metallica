package com.sapient.fsd.notification.events;

import com.sapient.fsd.common.events.MarketDataEvent;

import java.io.Serializable;

public class MarketNotification implements Serializable {

    public MarketNotification(MarketDataEvent event) {
        this.event = event;
    }

    public MarketNotification() {
    }

    private MarketDataEvent event;

    public MarketDataEvent getEvent() {
        return event;
    }

    public void setEvent(MarketDataEvent event) {
        this.event = event;
    }
}
