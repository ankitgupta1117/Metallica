package com.sapient.fsd.trade.controllers;

import com.sapient.fsd.trade.controller.TradeController;
import com.sapient.fsd.trade.entities.Trade;
import com.sapient.fsd.trade.models.TradeVO;
import com.sapient.fsd.trade.services.TradeService;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.BDDMockito;
import org.mockito.Matchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.*;
import static  org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


import javax.ws.rs.core.MediaType;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;

import static org.hamcrest.collection.IsCollectionWithSize.hasSize;

@RunWith(SpringRunner.class)
@WebMvcTest(TradeController.class)
public class TradeControllerTest {
    private static DateTimeFormatter DATE_TIME_FORMATTER  = DateTimeFormatter.ofPattern("dd-MM-uuuu");
    @Autowired
    private MockMvc mvc;
    @MockBean
    private TradeService service;

    @Test
    public void searchTrades_thenReturnTradesJsonArray()
            throws Exception {
        TradeVO trade1 = new TradeVO(100l,"S",100d,10l,"Open","ipsum","AU","NY","01-01-2018");
        TradeVO trade2 = new TradeVO(200l,"B",900d,1l,"Closed","ipsum","CU","ND","02-02-2018");
        TradeVO trade3 = new TradeVO(300l,"S",10d,100l,"Open","lorem","AG","LN","01-03-2018");

        BDDMockito.given(service.search("", "", "","", "01-01-2018", "01-03-2018"))
                .willReturn(Arrays.asList(trade1, trade2, trade3));

        mvc.perform(get("/trades/search")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(3)));
//                .andExpect(jsonPath("$[0].name", is(alex.getName())));
    }
}
