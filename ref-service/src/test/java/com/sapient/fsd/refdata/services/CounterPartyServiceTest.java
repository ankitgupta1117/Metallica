package com.sapient.fsd.refdata.services;

import com.sapient.fsd.common.models.CounterParty;
import com.sapient.fsd.refdata.entities.CounterPartyEntity;
import com.sapient.fsd.refdata.entities.LocationEntity;
import com.sapient.fsd.refdata.repositories.CounterPartyRepository;
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
public class CounterPartyServiceTest {

    @TestConfiguration
    public static class CounterPartyServiceImplTestContextConfig {
        @Bean
        public CounterPartyService counterPartyService() {
            return new CounterPartyService();
        }
    }

    @Autowired
    private CounterPartyService counterPartyService;
    @MockBean
    private CounterPartyRepository counterPartyRepository;

    CounterPartyEntity ipsum = new CounterPartyEntity("ipsum", "Ipsum");
    CounterPartyEntity lorem = new CounterPartyEntity("lorem", "Lorem");
    @Before
    public void setup(){
        Mockito.when(counterPartyRepository.findAll()).thenReturn(Arrays.asList(ipsum, lorem));
        Mockito.when(counterPartyRepository.findOne("ipsum")).thenReturn(ipsum);
        Mockito.when(counterPartyRepository.findOne("lorem")).thenReturn(lorem);
    }

    @Test
    public void findAllCounterPartiesTest(){
        List<CounterPartyEntity> coutnerParties = counterPartyService.getAllCounterParties();
        Assertions.assertThat(coutnerParties).contains(ipsum, lorem);
        Assertions.assertThat(coutnerParties.size()).isEqualTo(2);
        coutnerParties.forEach( (CounterPartyEntity entity) ->{
            Assertions.assertThat(entity.getId()).isIn("lorem", "ipsum");
            Assertions.assertThat(entity.getName()).isIn("Ipsum", "Lorem");
        });
    }

    @Test
    public void findByIdTest(){
        CounterPartyEntity lorem = counterPartyService.findById("lorem");
        Assertions.assertThat(lorem.getId()).isEqualTo("lorem");
        Assertions.assertThat(lorem.getName()).isEqualTo("Lorem");
    }
}
