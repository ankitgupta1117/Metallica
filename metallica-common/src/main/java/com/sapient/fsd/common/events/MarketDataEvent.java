package com.sapient.fsd.common.events;

import java.io.Serializable;

public class MarketDataEvent implements Serializable{

    public MarketDataEvent(String commoditycode, double price) {
        this.commoditycode = commoditycode;
        this.price = price;
    }

    public MarketDataEvent() {
    }

    private String commoditycode;
    private double price;

    public String getCommoditycode() {
        return commoditycode;
    }

    public void setCommoditycode(String commoditycode) {
        this.commoditycode = commoditycode;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
