package com.sapient.fsd.trade.entities;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.time.LocalDateTime;

/**
 * Created by agu187 on 1/14/2018.
 */

@Entity
@Table(name = "TRADE"
)
public class Trade {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "trade_seq")
    @SequenceGenerator(name="trade_seq", sequenceName = "TRADE_SEQ", allocationSize = 1)
    private Long id;
    private String side;
    private Double price;
    private Long quantity;
    @Column(name = "TRADE_DATE")
    private LocalDateTime tradeDate;
    private String status;
    @Column(name = "LOCATION_CD")
    private String locationCd;
    @Column(name = "COUNTERPARTY_CD")
    private String cntrPartyCd;
    @Column(name = "COMMODITY_CD")
    private String commodityCd;

    public Trade(String side, String commodityCd, String cntrPartyCd, String locationCd, LocalDateTime tradeDate, Double price, Long quantity, String status) {
        this.side = side;
        this.quantity = quantity;
        this.price = price;
        this.commodityCd = commodityCd;
        this.cntrPartyCd = cntrPartyCd;
        this.locationCd = locationCd;
        this.tradeDate = tradeDate;
        this.status = status;
    }

    public Trade(){

    }

    public String getCntrPartyCd() {
        return cntrPartyCd;
    }

    public void setCntrPartyCd(String cntrPartyCd) {
        this.cntrPartyCd = cntrPartyCd;
    }

    public String getCommodityCd() {
        return commodityCd;
    }

    public void setCommodityCd(String commodityCd) {
        this.commodityCd = commodityCd;
    }

    public String getLocationCd() {
        return locationCd;
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

    public LocalDateTime getTradeDate() {
        return tradeDate;
    }

    public void setTradeDate(LocalDateTime tradeDate) {
        this.tradeDate = tradeDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setLocationCd(String locationCd) {
        this.locationCd = locationCd;
    }

    @Override
    public String toString() {
        return "Trade{" +
                "id=" + id +
                ", side='" + side + '\'' +
                ", price=" + price +
                ", quantity=" + quantity +
                ", tradeDate=" + tradeDate +
                ", status='" + status + '\'' +
                ", locationCd='" + locationCd + '\'' +
                ", cntrPartyCd='" + cntrPartyCd + '\'' +
                ", commodityCd='" + commodityCd + '\'' +
                '}';
    }
}
