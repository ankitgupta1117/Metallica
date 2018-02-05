package com.sapient.fsd.refdata.repositories;

import com.sapient.fsd.refdata.entities.CommodityEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

/**
 * Commodity repository - extends from spring data jpa interfaces : CrudRepository
 * Created by agu187 on 1/13/2018.
 */
public interface CommodityRepository extends CrudRepository<CommodityEntity, Long> {

    /**
     * Finds CommodityEntity for a specific code
     *
     * @param code - Commodity code
     * @return - CommodityEntity
     */
    CommodityEntity findByCode(@Param(value = "code") String code);
}
