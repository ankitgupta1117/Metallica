import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Configuration} from '../Configuration';
import {Observable} from 'rxjs/Observable';
import {Trade} from '../../models/trade';

@Injectable()
export class TradeService{
  private searchTradeUrl: string = "/api/trades/search";
  private tradesUrl: string = "/api/trades"
  constructor(private _httpClient: HttpClient, private  _config: Configuration){
  }

  public searchTrades(fromDate: string, toDate: string, commodity: string, counterparty: string, location: string): Observable<Trade[]>{
    let url: string = this._config.server + this.searchTradeUrl;
    let params: Map<string, string> = new Map();
    if(commodity!= "" && commodity != null && commodity != undefined){
      params.set("commcd", commodity);
    }
    if(counterparty!= "" && counterparty != null && counterparty != undefined){
      params.set("cntrPrty", counterparty);
    }
    if(location!= "" && location != null && location != undefined){
      params.set("loc", location);
    }
    if(fromDate!= "" && fromDate != null && fromDate != undefined){
      params.set("from", fromDate);
    }
    if(toDate!= "" && toDate != null && toDate != undefined){
      params.set("to", toDate);
    }
    let httpParams = new HttpParams();

    params.forEach( (key,val) =>{
      httpParams = httpParams.append(val,key);
    });
    return this._httpClient.get<Trade[]>(url, {params: httpParams});

  }

  public deleteTrade(tradeId: string){
    let url = this._config.server + this.tradesUrl;
    let httpParams = new HttpParams();
    httpParams = httpParams.append("id", tradeId);
    console.log("Delete Trade Service "+ httpParams);
    return this._httpClient.delete<Trade>(url, {params: httpParams});
  }

  public getTrade(tradeId: string){
    let url = this._config.server + this.tradesUrl;
    let httpParams = new HttpParams();
    httpParams = httpParams.append("id", tradeId);
    return this._httpClient.get<Trade>(url, {params: httpParams});
  }

  public createTrade(trade: Trade){
    let url = this._config.server + this.tradesUrl;
    return this._httpClient.post<Trade>(url, trade);
  }
}
