package com.sapient.fsd.trade.repository;

import com.sapient.fsd.trade.entities.Trade;
import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RunWith(SpringRunner.class)
@DataJpaTest
public class SearchTradeDaoTest {
    private static DateTimeFormatter DATE_TIME_FORMATTER  = DateTimeFormatter.ofPattern("dd-MM-uuuu");
    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private SearchTradeDao searchTradeDao;

    @TestConfiguration
    public static class SearchDaoTestContextConfig {
        @Bean
        public SearchTradeDao searchTradeDao() {
            return new SearchTradeDao();
        }
    }

    @Before
    public void setup(){
        Trade trade1 = new Trade("S","AU","ipsum","NY", LocalDateTime.from(LocalDate.parse("01-01-2018", DATE_TIME_FORMATTER).atStartOfDay()),100d, 1l,"Open");
        Trade trade2 = new Trade("B","CU","ipsum","ND", LocalDateTime.from(LocalDate.parse("02-02-2018", DATE_TIME_FORMATTER).atStartOfDay()),900d, 1l,"Closed");
        Trade trade3 = new Trade("S","AU","lorem","LN", LocalDateTime.from(LocalDate.parse("01-03-2018", DATE_TIME_FORMATTER).atStartOfDay()),10d, 1l,"Open");
        entityManager.persist(trade1);
        entityManager.persist(trade2);
        entityManager.persist(trade3);
        entityManager.flush();
    }

    @Test
    public void searchTradeFromDbTest(){
        List<Trade> trades = searchTradeDao.searchTradeFromDb("S","AU", "ipsum", "LN","01-01-2018","01-03-2018");
        Assertions.assertThat(trades.size()).isEqualTo(0);
        trades = searchTradeDao.searchTradeFromDb("S","AU", "", "","01-01-2018","01-03-2018");
        Assertions.assertThat(trades.size()).isEqualTo(2);
        trades = searchTradeDao.searchTradeFromDb("B","", "", "","01-01-2018","01-03-2018");
        Assertions.assertThat(trades.size()).isEqualTo(1);
        trades = searchTradeDao.searchTradeFromDb("","", "", "","01-01-2018","01-03-2018");
        Assertions.assertThat(trades.size()).isEqualTo(3);
        trades = searchTradeDao.searchTradeFromDb("","", "", "","02-03-2018","01-03-2018");
        Assertions.assertThat(trades.size()).isEqualTo(0);
    }
}
