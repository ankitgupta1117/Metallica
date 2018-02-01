import { Component } from '@angular/core';
import  *  as SockJs from 'sockjs-client';
import * as Stomp from 'stompjs'
import { MarketFeedComponent } from "../market-live-feed/market-feed.component";
import { ReferenceService } from '../../shared/services/refrerence-service/reference-service';
import { Commodity } from '../../shared/models/Commodity';
import { NotificationService } from "../../shared/services/notification/notification-service";
import { MarketDataEvent } from '../../shared/events/marketFeedEvent';

@Component({
    selector: 'market-ticker',
    templateUrl: 'market-ticker.component.html',
    styleUrls: ['market-ticker.component.css']
})
export class MarketTickerComponent {
 
    private tickerData : Map< string, {price: number, isup: boolean}> = new Map();
    private tickers: string[] = [];
    private codeToDescMap : Map< string, string> = new Map();
    constructor(private _refService : ReferenceService, private _notificationService: NotificationService){
        this._refService.getAllCommodities().toPromise().then(
            (data: Commodity[]) =>{
                data.forEach( (commodity: Commodity) =>{
                    this.tickerData.set(commodity.description, {price: 100, isup: false});
                    this.tickers.push(commodity.description);
                    this.codeToDescMap.set(commodity.code, commodity.description);
                } );
            }
        );
        let that = this;
        
        this._notificationService.getMarketData().subscribe({
            next: function(value: MarketDataEvent){
                let commodity = that.codeToDescMap.get(value.event.commoditycode);
                let newPrice = value.event.price;
                let oldPrice = that.tickerData.get(commodity).price;
                let bool = newPrice > oldPrice;
                that.tickerData.set(commodity, {price: newPrice, isup: bool});
            }
        });
          
          
    }
}