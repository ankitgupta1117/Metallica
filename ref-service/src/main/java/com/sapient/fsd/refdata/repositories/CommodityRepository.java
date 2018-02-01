package com.sapient.fsd.refdata.repositories;

import com.sapient.fsd.refdata.entities.Commodity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import javax.jws.WebParam;
import java.math.BigInteger;
import java.util.List;

/**
 * Created by agu187 on 1/13/2018.
 */
@RepositoryRestResource()
public interface CommodityRepository extends CrudRepository<Commodity, Long> {

    @RestResource(path = "findByCode")
    List<Commodity> findByCode(@Param(value = "code") String code);
}
