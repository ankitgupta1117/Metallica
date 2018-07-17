package com.sapient.fsd.trade.services;

import com.sapient.fsd.trade.entities.Trade;
import com.sapient.fsd.trade.exceptions.TradeException;
import com.sapient.fsd.trade.models.CreateTradeRequest;
import com.sapient.fsd.trade.models.UpdateTradeRequest;
import com.sapient.fsd.trade.repository.SearchTradeDao;
import com.sapient.fsd.trade.repository.TradeRepository;
import com.sapient.fsd.trade.utils.DateTimeUtils;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;

import static org.junit.Assert.assertEquals;
import static org.mockito.Matchers.isA;
import static org.mockito.Mockito.*;

public class TradeServiceTest {

    TradeService tradeService;

    @Mock
    private TradeRepository tradeRepository;
    @Mock
    private SearchTradeDao searchTradeDao;
    @Mock
    private JmsNotifier jmsNotifier;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        tradeService = new TradeService(searchTradeDao, tradeRepository, jmsNotifier);
        doNothing().when(jmsNotifier).sendTradeCreationEvent(isA(Long.class));
        doNothing().when(jmsNotifier).sendTradeDeletionEvent(isA(Long.class));
        doNothing().when(jmsNotifier).sendTradeUpdateEvent(isA(Long.class));
    }

    @Test
    public void getTrade() {
        Trade trade = new Trade("B", "AU", "Ipsum", "NY", DateTimeUtils.parseDate("01-08-2018"), 100d, 10l, "Open");
        trade.setId(100l);
        when(tradeRepository.findOne(100l))
                .thenReturn(trade);

        assertEquals(Long.valueOf(100l), tradeService.getTrade(100l).getId());
    }

    @Test
    public void search() {

        Trade sellTrade = new Trade("S", "AU", "Ipsum", "NY", DateTimeUtils.parseDate("01-01-2018"), 100d, 10l, "Open");
        sellTrade.setId(200l);
        Trade trade = new Trade("B", "AL", "Dolor", "ND", DateTimeUtils.parseDate("01-08-2018"), 8000d, 5000l, "Closed");
        trade.setId(100l);
        Trade buyTrade = new Trade("B", "CU", "Ament", "UK", DateTimeUtils.parseDate("15-08-2018"), 8000d, 5000l, "Closed");
        buyTrade.setId(300l);

        when(searchTradeDao.searchTradeFromDb("B", "", "","","",""))
                .thenReturn(Arrays.asList(trade, buyTrade));
        when(searchTradeDao.searchTradeFromDb("S", "", "","","",""))
                .thenReturn(Arrays.asList(sellTrade));
        when(searchTradeDao.searchTradeFromDb("", "", "","","",""))
                .thenReturn(Arrays.asList(trade, buyTrade, sellTrade));

        assertEquals(2, tradeService.search("B","", "","","","").size());
        assertEquals(3, tradeService.search("","", "","","","").size());
        assertEquals(1, tradeService.search("S","", "","","","").size());
    }


    @Test
    public void createTrade() {
        Trade retTradeObj = new Trade("B", "AU", "Ipsum", "NY", DateTimeUtils.parseDate("01-08-2018"), 100d, 10l, "Open");
        Trade argTradeObj = new Trade("B", "AU", "Ipsum", "NY", DateTimeUtils.parseDate("01-08-2018"), 100d, 10l, "Open");
        retTradeObj.setId(100l);
        CreateTradeRequest tradeRequest = getCreateTradeRequest("01-08-2018", 100d, 10l, "Ipsum", "NY", "AU", "B");

        when(tradeRepository.save(isA(Trade.class))).thenReturn(retTradeObj);
        tradeService.createTrade(tradeRequest);

        verify(tradeRepository, times(1)).save(argTradeObj);
    }

    @Test(expected = TradeException.class)
    public void createTrade_ImproperInput() {
        Trade retTradeObj = new Trade("B", "AU", "Ipsum", "NY", DateTimeUtils.parseDate("01-08-2018"), 100d, 10l, "Open");
        retTradeObj.setId(100l);
        CreateTradeRequest tradeRequest = getCreateTradeRequest("01-AUG-2018", 100d, 10l, "Ipsum", "NY", "AU", "B");

        when(tradeRepository.save(isA(Trade.class))).thenReturn(retTradeObj);
        tradeService.createTrade(tradeRequest);
    }

    @Test
    public void deleteTrade() {
        doNothing().when(tradeRepository).delete(isA(Long.class));
        tradeService.deleteTrade(100l);

        verify(tradeRepository, times(1)).delete(100L);
    }

    @Test
    public void updateTrade() {
        Trade trade = new Trade("B", "AU", "Ipsum", "NY", DateTimeUtils.parseDate("01-08-2018"), 100d, 10l, "Open");
        trade.setId(100l);

        UpdateTradeRequest updateRequest = getUpdateTradeRequest(100L,"01-08-2018", 100d, 10l, "Ipsum", "NY", "AU", "B","Open");

        when(tradeRepository.save(isA(Trade.class))).thenReturn(trade);
        tradeService.updateTrade(updateRequest);

        verify(tradeRepository, times(1)).save(trade);
    }

    @Test(expected = TradeException.class)
    public void updateTrade_improperInput() {
        Trade trade = new Trade("B", "AU", "Ipsum", "NY", DateTimeUtils.parseDate("01-08-2018"), 100d, 10l, "Open");
        trade.setId(100l);

        UpdateTradeRequest updateRequest = getUpdateTradeRequest(100L,"01-A-2018", 100d, 10l, "Ipsum", "NY", "AU", "B","Open");

        when(tradeRepository.save(isA(Trade.class))).thenReturn(trade);
        tradeService.updateTrade(updateRequest);

        verify(tradeRepository, times(1)).save(trade);
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
