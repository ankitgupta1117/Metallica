package com.sapient.fsd.refdata.controllers;

import com.sapient.fsd.common.models.Commodity;
import com.sapient.fsd.refdata.services.CommodityRefService;
import jdk.nashorn.internal.parser.JSONParser;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;

import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
public class CommodityControllerTest {

    private MockMvc mockMvc;

    @InjectMocks
    private CommodityController commodityController;
    @Mock
    private CommodityRefService commodityRefService;

    @Before
    public void setUp(){
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(commodityController).build();
    }

    @Test
    public void listAllCommoditiesTest() throws Exception {
        Commodity zn = new Commodity("ZN", "Zinc");
        Commodity ag= new Commodity("AG", "Silver");
        Commodity au = new Commodity("AU", "Gold");
        Commodity cu = new Commodity("CU", "Copper");

        when(commodityRefService.getAllCommodities()).thenReturn(Arrays.asList(ag,au,cu,zn));

        mockMvc.perform(MockMvcRequestBuilders.get("/commodity/list"))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void searchByCodeTest() throws Exception {
        Commodity zn = new Commodity("ZN", "Zinc");

        when(commodityRefService.findByCode("ZN")).thenReturn(zn);

        mockMvc.perform(MockMvcRequestBuilders.get("/commodity/search?code=zn"))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
}
