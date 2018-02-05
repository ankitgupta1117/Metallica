package com.sapient.fsd.refdata.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * Location entity.
 * Created by agu187 on 1/11/2018.
 */
@Entity
@Table(name="REF_LOCATIONS")
public class LocationEntity implements Serializable{
    @Id
    private String code;
    private String name;

    public LocationEntity(String code, String name) {
        this.code = code;
        this.name = name;
    }

    public LocationEntity() {

    }

    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }
}
