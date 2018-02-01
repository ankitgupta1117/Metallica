package com.sapient.fsd.refdata.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by agu187 on 1/11/2018.
 */
@Entity
@Table(name="REF_COUNTERPARTY")
public class CounterParty {
    @Id
    private String id;
    private String name;

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
