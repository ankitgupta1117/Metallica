package com.sapient.fsd.common.events;

import java.io.Serializable;

public enum TradeEventType implements Serializable{
    CREATE("create"), UPDATE("update"), DELETE("delete");

    TradeEventType(String create) {
    }
}
