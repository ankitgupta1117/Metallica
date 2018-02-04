package com.sapient.fsd.refdata.controllers;

import com.sapient.fsd.common.models.Commodity;
import com.sapient.fsd.refdata.services.CommodityRefService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@RunWith(SpringRunner.class)
public class CommodityControllerTest {

    private MockMvc mockMvc;

    @InjectMocks
    private CommodityController commodityController;
    @InjectMocks
    private CommodityRefService commodityRefService;
    @Before
    public void setUp() throws Exception {
        mockMvc = MockMvcBuilders.standaloneSetup(commodityController, commodityRefService).
                build();
    }

    @Test
    public void listCommoditiesTest() throws Exception {

        mockMvc.perform(MockMvcRequestBuilders.get("/commodity/list"))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
}
