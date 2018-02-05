package com.sapient.fsd.refdata.repositories;

import com.sapient.fsd.refdata.entities.LocationEntity;
import org.springframework.data.repository.CrudRepository;

/**
 * Location repository - extends from spring data jpa interfaces : CrudRepository
 * Created by agu187 on 1/13/2018.
 */
public interface LocationRepository extends CrudRepository<LocationEntity, String> {
}
