package com.sapient.fsd.trade.repository;

import com.sapient.fsd.trade.entities.Trade;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by agu187 on 1/16/2018.
 */

public interface TradeRepository extends CrudRepository<Trade, Long> {
}
