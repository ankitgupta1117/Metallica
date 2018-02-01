import { Injectable } from "@angular/core";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Subject } from "rxjs/Subject";
import { MarketDataEvent } from "../../events/marketFeedEvent";
import { TradeEvent } from "../../events/trade-events";

const SERVER_URL = 'http://localhost:9001/notification-websocket';

@Injectable()
export class NotificationService {

    private marketClient: Stomp.Client;
    private tradeClient: Stomp.Client;

    constructor() {
        var socket = new SockJS('http://localhost:9001/notification-websocket');
        // Attempt connection, passing in a callback
        this.marketClient = Stomp.over(socket);
        var socket1 = new SockJS('http://localhost:9001/notification-websocket');
        this.tradeClient = Stomp.over(socket1);
    }

    public getMarketData(): Subject<Object> {

        let stompClient = this.marketClient;
        let sub = new Subject<MarketDataEvent>();

        // stompClient.connect({}, function (frame) {
        //     stompClient.subscribe('/market/feeds', function (data) {
        //         sub.next(JSON.parse(data.body));
        //     });
        // });
        return sub;
    }

    public getTradeNotifications(): Subject<TradeEvent> {
        let stompClient = this.tradeClient;
        let sub = new Subject<TradeEvent>();

        stompClient.connect({}, function (frame) {
            stompClient.subscribe('/trade/feeds', function (data) {
                console.log(data.body);
                sub.next(JSON.parse(data.body));
            });

        });
        return sub;
    }

}