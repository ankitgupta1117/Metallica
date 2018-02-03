import { Component } from '@angular/core';
import { CounterParty } from '../../../shared/models/CounterParty';
import { Commodity } from '../../../shared/models/Commodity';
import { Location } from '../../../shared/models/location';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ReferenceService } from '../../../shared/services/refrerence-service/reference-service';
import { TradeService } from '../../../shared/services/trade-service/trade-service';
import { DatePipe } from '@angular/common';
import { Trade } from '../../../shared/models/trade';


@Component({
    selector: 'new-trade',
    templateUrl: './new-trade.component.html',
    styleUrls: ['./new-trade.component.css'],
    providers: [DatePipe]
})
export class NewTradeComponent implements OnInit{
   
    selectedSide:String = '';
    public sides = [['B', "Buy"], ['S', "Sell"] ];
    trade: Trade = new Trade();

    public locations: Location[] =[];
    public counterparties: CounterParty[] = [];
    public commodities: Commodity[] = [];


    ngOnInit(){
         this._refService.getAllCommodities().subscribe(
            (data: Commodity[]) => {
              this.commodities.push.apply(this.commodities,data);
            }
          );

          this._refService.getAllCounterParties().subscribe(
            (data: CounterParty[]) => {
              this.counterparties.push.apply(this.counterparties,data);
            }
          );

          this._refService.getAllLocations().subscribe(
            (data: Location[]) => {
              this.locations.push.apply(this.locations,data);
            }
          );
    }

    constructor(private _refService: ReferenceService, 
                                    private _tradeService: TradeService,
                                    private _datePipe: DatePipe){
    }
    

    submit(){
        console.log(this.trade);
        this.trade.tradeDate = this._datePipe.transform(this.trade.tradeDate, 'dd-MM-yyyy');
        this._tradeService.createTrade(this.trade).subscribe( data =>{
            console.log("Trade created "+ data);
        });
    }

}
