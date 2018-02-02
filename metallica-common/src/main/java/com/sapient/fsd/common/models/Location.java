package com.sapient.fsd.common.models;

/**
 * Created by agu187 on 1/11/2018.
 */
public class Location {

    public Location(){

    }

    public Location(String code, String name){
        this.code = code;
        this.name = name;
    }

    private String code;
    private String name;

    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setName(String name) {
        this.name = name;
    }
}
