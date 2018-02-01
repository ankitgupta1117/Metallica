package com.sapient.fsd.refdata.repositories;

import com.sapient.fsd.refdata.entities.CounterParty;
import com.sapient.fsd.refdata.entities.Location;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by agu187 on 1/13/2018.
 */
@RepositoryRestResource
public interface LocationRepository extends CrudRepository<Location, String> {
}
