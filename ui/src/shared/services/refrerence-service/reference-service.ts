import {Location} from '../../models/location';
import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Configuration} from '../Configuration';
import {Observable} from 'rxjs/Observable';
import {CounterParty} from '../../models/CounterParty';
import {Commodity} from '../../models/Commodity';

@Injectable()
export class ReferenceService{

  private locationUrl = '/location';
  private counterPartyUrl = '/counterparty';
  private commodityUrl = '/commodity';

  constructor(private _httpClient: HttpClient, private  _config: Configuration){

  }
  public getAllLocations(): Observable<Location[]>{
    let url : string = this._config.server + this.locationUrl  + "/list";
    return this._httpClient.get<Location[]>(url);
  }

  public getAllCounterParties(): Observable<CounterParty[]>{
    let url : string = this._config.server + this.counterPartyUrl  + "/list";
    return this._httpClient.get<CounterParty[]>(url);
  }

  public getAllCommodities(): Observable<Commodity[]>{
    let url : string = this._config.server + this.commodityUrl  + "/list";
    return this._httpClient.get<Commodity[]>(url);
  }

}


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(JSON.stringify(req.headers));
    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    console.log(JSON.stringify(req.headers));
    return next.handle(req);
  }
}
