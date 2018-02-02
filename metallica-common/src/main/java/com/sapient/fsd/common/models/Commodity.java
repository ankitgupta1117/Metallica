package com.sapient.fsd.common.models;

/**
 * Created by agu187 on 1/11/2018.
 */
public class Commodity {
    private String code;
    private String description;

    public Commodity(String code, String description) {
        this.code = code;
        this.description  =description;
    }

    public Commodity(){

    }

    public String getCode() {
        return code;
    }

    public String getDescription() {
        return description;
    }
}
