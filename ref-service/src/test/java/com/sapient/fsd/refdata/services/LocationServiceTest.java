package com.sapient.fsd.refdata.services;

import com.sapient.fsd.common.models.Location;
import com.sapient.fsd.refdata.entities.LocationEntity;
import com.sapient.fsd.refdata.repositories.LocationRepository;
import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.List;

@RunWith(SpringRunner.class)
public class LocationServiceTest {

    @TestConfiguration
    public static class LocationServiceImplTestContextConfig {

        @Bean
        public LocationService LocationService() {
            return new LocationService();
        }
    }

    @Autowired
    private LocationService locationService;
    @MockBean
    private LocationRepository locationRepository;

    LocationEntity newYork = new LocationEntity("NY", "New York");
    LocationEntity newDelhi = new LocationEntity("ND", "New Delhi");
    @Before
    public void setup(){
        Mockito.when(locationRepository.findAll()).thenReturn(Arrays.asList(newYork, newDelhi));
        Mockito.when(locationRepository.findOne("NY")).thenReturn(newYork);
        Mockito.when(locationRepository.findOne("ND")).thenReturn(newDelhi);
    }

    @Test
    public void findAllLocationsTest(){
        List<LocationEntity> locations = locationService.getAllLocations();
        Assertions.assertThat(locations).contains(newDelhi, newYork);
        Assertions.assertThat(locations.size()).isEqualTo(2);
        locations.forEach( (LocationEntity l) ->{
            Assertions.assertThat(l.getCode()).isIn("NY", "ND");
            Assertions.assertThat(l.getName()).isIn("New York", "New Delhi");
        });
    }

    @Test
    public void findByIdTest(){
        LocationEntity newYork = locationService.findById("NY");
        Assertions.assertThat(newYork.getCode()).isEqualTo("NY");
        Assertions.assertThat(newYork.getName()).isEqualTo("New York");
    }
}
