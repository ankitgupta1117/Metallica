package com.sapient.fsd.refdata.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * Created by agu187 on 1/11/2018.
 */
@Entity
@Table(name="REF_COUNTERPARTY")
public class CounterPartyEntity implements Serializable{
    @Id
    private String id;
    private String name;

    public CounterPartyEntity() {
    }

    public CounterPartyEntity(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
