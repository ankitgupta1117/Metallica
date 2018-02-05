package com.sapient.fsd.refdata.entities;

import javax.persistence.*;
import java.math.BigInteger;

/**
 * Commodity entity
 *
 * Created by agu187 on 1/11/2018.
 */
@Entity
@Table(name = "REF_COMMODITIES")
public class CommodityEntity {
    @Id
    private Long id;
    private String code;
    private String description;

    public Long getId() {
        return id;
    }

    public String getCode() {
        return code;
    }

    public String getDescription() {
        return description;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
