package com.sapient.fsd.refdata.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by agu187 on 1/11/2018.
 */
@Entity
@Table(name="REF_LOCATIONS")
public class Location {
    @Id
    private String code;
    private String name;

    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }
}
