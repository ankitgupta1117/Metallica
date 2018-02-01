package com.sapient.fsd.refdata.config;

import com.sapient.fsd.refdata.entities.Commodity;
import com.sapient.fsd.refdata.entities.CounterParty;
import com.sapient.fsd.refdata.entities.Location;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

/**
 * Created by agu187 on 1/14/2018.
 */
@Configuration
public class ExposeEntityIdRestConfiguration extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
//        config.exposeIdsFor(Commodity.class);
        config.exposeIdsFor(Location.class);
        config.exposeIdsFor(CounterParty.class);
    }
}
