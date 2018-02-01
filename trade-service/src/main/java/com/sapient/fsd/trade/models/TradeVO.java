package com.sapient.fsd.trade.models;

import java.math.BigDecimal;

/**
 * Created by agu187 on 1/16/2018.
 */
public class TradeVO {

    private Long id;
    private String side;
    private Double price;
    private Long quantity;
    private String tradeDate;
    private String status;
    private String location;
    private String cntrParty;
    private String commodity;

    public TradeVO(Long id, String side, Double price, Long quantity, String status, String cntrParty, String commodity, String location, String tradeDate) {
        this.id = id;
        this.side = side;
        this.price = price;
        this.quantity = quantity;
        this.cntrParty = cntrParty;
        this.commodity = commodity;
        this.tradeDate = tradeDate;
        this.location = location;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
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
