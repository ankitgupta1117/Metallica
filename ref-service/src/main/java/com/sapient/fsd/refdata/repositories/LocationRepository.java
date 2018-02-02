package com.sapient.fsd.refdata.repositories;

import com.sapient.fsd.refdata.entities.LocationEntity;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by agu187 on 1/13/2018.
 */
//@RepositoryRestResource
public interface LocationRepository extends CrudRepository<LocationEntity, String> {
}
