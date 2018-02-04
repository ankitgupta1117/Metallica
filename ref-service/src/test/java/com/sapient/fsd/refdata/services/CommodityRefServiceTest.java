package com.sapient.fsd.refdata.services;

import com.sapient.fsd.common.models.Commodity;
import com.sapient.fsd.refdata.entities.CommodityEntity;
import com.sapient.fsd.refdata.repositories.CommodityRepository;
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

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Stream;

@RunWith(SpringRunner.class)
public class CommodityRefServiceTest {

    @TestConfiguration
    public static class CommodityRefServiceImplTestContextConfig {

        @Bean
        public CommodityRefService commodityRefService() {
            return new CommodityRefService();
        }
    }

    @Autowired
    private CommodityRefService commodityRefService;
    @MockBean
    private CommodityRepository commodityRepository;

    @Before
    public void setUp() {
        CommodityEntity goldEntity = new CommodityEntity();
        goldEntity.setId(1l);  goldEntity.setCode("AG"); goldEntity.setDescription("Gold");

        CommodityEntity silverEntity = new CommodityEntity();
        silverEntity.setId(2l);  silverEntity.setCode("AU"); silverEntity.setDescription("Silver");

        Mockito.when(commodityRepository.findByCode("AG"))
                .thenReturn(goldEntity);
        Mockito.when(commodityRepository.findAll())
                .thenReturn(new ArrayList<CommodityEntity>(Arrays.asList(silverEntity, goldEntity)));
    }


    @Test
    public void getAllCommoditiesTest(){
        List<Commodity> foundCommodities = commodityRefService.getAllCommodities();
        Assertions.assertThat(foundCommodities.size()).isEqualTo(2);
        foundCommodities.forEach((Commodity c)->{
            Assertions.assertThat(c.getCode()).isIn("AG", "AU");
            Assertions.assertThat(c.getDescription()).isIn("Silver", "Gold");
        });
    }


    @Test
    public void findByCodeTest(){
        Commodity gold = commodityRefService.findByCode("AG");
        Assertions.assertThat(gold.getCode()).isEqualTo("AG");
        Assertions.assertThat(gold.getDescription()).isEqualTo("Gold");

    }
}
