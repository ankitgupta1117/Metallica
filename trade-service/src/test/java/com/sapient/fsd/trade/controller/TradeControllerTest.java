package com.sapient.fsd.trade.controller;

import com.sapient.fsd.trade.exceptions.InvalidTradeRequestException;
import com.sapient.fsd.trade.models.CreateTradeRequest;
import com.sapient.fsd.trade.models.TradeVO;
import com.sapient.fsd.trade.models.UpdateTradeRequest;
import com.sapient.fsd.trade.services.TradeService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.lang.reflect.Field;

import static org.mockito.Matchers.any;
import static org.mockito.Mockito.*;

public class TradeControllerTest {
    @Mock
    private TradeService tradeService;
    private TradeController controller;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
        this.controller = new TradeController();
        Field tradeServiceField = controller.getClass().getDeclaredField("tradeService");
        tradeServiceField.setAccessible(true);
        tradeServiceField.set(this.controller, this.tradeService);
    }

    @Test
    public void searchTrades() {
    }

    @Test
    public void createTrade() throws InvalidTradeRequestException {
        doNothing().when(tradeService).createTrade(any(CreateTradeRequest.class));
        CreateTradeRequest tradeRequest = getCreateTradeRequest("01-08-2018", 100d, 10l, "Ipsum", "NY", "AU", "B");
        controller.createTrade(tradeRequest);
        verify(tradeService, times(1)).createTrade(tradeRequest);
    }

    @Test(expected = InvalidTradeRequestException.class)
    public void createTrade_InvalidInput() throws InvalidTradeRequestException {
        doNothing().when(tradeService).createTrade(any(CreateTradeRequest.class));
        CreateTradeRequest tradeRequest = getCreateTradeRequest("", 100d, 10l, "Ipsum", "NY", "AU", "B");
        controller.createTrade(tradeRequest);
        verify(tradeService, times(1)).createTrade(tradeRequest);
    }

    @Test
    public void updateTrade() throws InvalidTradeRequestException {
        doNothing().when(tradeService).updateTrade(any(UpdateTradeRequest.class));
        UpdateTradeRequest updateRequest = getUpdateTradeRequest(100L,"01-08-2018", 100d, 10l, "Ipsum", "NY", "AU", "B","Open");
        controller.upateTrade(updateRequest);
        verify(tradeService, times(1)).updateTrade(updateRequest);
    }

    @Test(expected = InvalidTradeRequestException.class)
    public void updateTrade_InvalidInput() throws InvalidTradeRequestException {
        doNothing().when(tradeService).updateTrade(any(UpdateTradeRequest.class));
        UpdateTradeRequest updateRequest = getUpdateTradeRequest(100L,"01-08-2018", 100d, 10l, "", "NY", "AU", "B","Open");
        controller.upateTrade(updateRequest);
        verify(tradeService, times(1)).updateTrade(updateRequest);
    }

    @Test
    public void getTrade() {
        TradeVO tradeVO = new TradeVO(100L, "B", 400D, 9999L, "Open", "Lorem", "CU", "GGN", "14-08-2018");
        when(tradeService.getTrade(isA(Long.class))).thenReturn(tradeVO);
        Assert.assertEquals(Long.valueOf(100L), controller.getTrade("100").getId());
    }

    @Test(expected = NumberFormatException.class)
    public void getTrade_ImproperInput() {
        TradeVO tradeVO = new TradeVO(100L, "B", 400D, 9999L, "Open", "Lorem", "CU", "GGN", "14-08-2018");
        when(tradeService.getTrade(isA(Long.class))).thenReturn(tradeVO);
        Assert.assertEquals(Long.valueOf(100L), controller.getTrade("dummy").getId());
    }

    @Test
    public void deleteTrade() {
        doNothing().when(tradeService).deleteTrade(isA(Long.class));
        controller.deleteTrade("100");
        verify(tradeService, times(1)).deleteTrade(100L);
    }

    @Test(expected = NumberFormatException.class)
    public void deleteTrade_ImproperInput() {
        doNothing().when(tradeService).deleteTrade(isA(Long.class));
        controller.deleteTrade("DUMMY");
        verify(tradeService, times(1)).deleteTrade(100L);
    }

    private UpdateTradeRequest getUpdateTradeRequest(long tradeId, String tradeDate, double price, long qty, String cntrPrty, String loc, String commodity, String side, String status){
        UpdateTradeRequest request = new UpdateTradeRequest();
        request.setPrice(price);
        request.setQuantity(qty);
        request.setTradeDate(tradeDate);
        request.setCntrParty(cntrPrty);
        request.setLocation(loc);
        request.setCommodity(commodity);
        request.setSide(side);
        request.setId(tradeId);
        request.setStatus(status);
        return request;
    }

    private CreateTradeRequest getCreateTradeRequest(String tradeDate, double price, long qty, String cntrPrty, String loc, String commodity, String side){
        CreateTradeRequest request = new CreateTradeRequest();
        request.setPrice(price);
        request.setQuantity(qty);
        request.setTradeDate(tradeDate);
        request.setCntrParty(cntrPrty);
        request.setLocation(loc);
        request.setCommodity(commodity);
        request.setSide(side);
        return request;
    }
}
