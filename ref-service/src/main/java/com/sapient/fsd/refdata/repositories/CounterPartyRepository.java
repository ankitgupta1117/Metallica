package com.sapient.fsd.refdata.repositories;

import com.sapient.fsd.refdata.entities.Commodity;
import com.sapient.fsd.refdata.entities.CounterParty;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by agu187 on 1/13/2018.
 */
@RepositoryRestResource
public interface CounterPartyRepository extends CrudRepository<CounterParty, String> {
}
