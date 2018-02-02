package com.sapient.fsd.refdata.repositories;

import com.sapient.fsd.refdata.entities.CommodityEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

/**
 * Created by agu187 on 1/13/2018.
 */
//@RepositoryRestResource()
public interface CommodityRepository extends CrudRepository<CommodityEntity, Long> {

//    @RestResource(path = "findByCode")
    CommodityEntity findByCode(@Param(value = "code") String code);
}
