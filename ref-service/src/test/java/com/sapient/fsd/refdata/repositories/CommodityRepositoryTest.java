package com.sapient.fsd.refdata.repositories;

import com.sapient.fsd.common.models.Commodity;
import com.sapient.fsd.refdata.entities.CommodityEntity;
import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@DataJpaTest
public class CommodityRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private CommodityRepository commodityRepository;

    @Before
    public void setup(){
        CommodityEntity commodity = new CommodityEntity();
        commodity.setCode("AG"); commodity.setDescription("Gold"); commodity.setId(1l);
        entityManager.persist(commodity);
        entityManager.flush();
    }

    @Test
    public void whenFindByCodeThenRetunDesc(){

        CommodityEntity foundCommodity = commodityRepository.findByCode("AG");

        Assertions.assertThat(foundCommodity.getDescription()).isEqualTo("Gold");

    }
}
