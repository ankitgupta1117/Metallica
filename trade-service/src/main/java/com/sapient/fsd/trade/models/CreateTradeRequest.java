package com.sapient.fsd.trade.models;

import java.io.Serializable;
import java.math.BigDecimal;

/**
 * Created by agu187 on 1/16/2018.
 */
public class CreateTradeRequest implements Serializable{

    private String side;
    private Double price;
    private Long quantity;
    private String tradeDate;
    private String location;
    private String cntrParty;
    private String commodity;

    public String getSide() {
        return side;
    }

    public void setSide(String side) {
        this.side = side;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public String getTradeDate() {
        return tradeDate;
    }

    public void setTradeDate(String tradeDate) {
        this.tradeDate = tradeDate;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getCntrParty() {
        return cntrParty;
    }

    public void setCntrParty(String cntrParty) {
        this.cntrParty = cntrParty;
    }

    public String getCommodity() {
        return commodity;
    }

    public void setCommodity(String commodity) {
        this.commodity = commodity;
    }
}
