import {Component, Input} from '@angular/core';
import { Trade } from '../../../shared/models/trade';
import { ActivatedRoute } from '@angular/router';
import { TradeService } from '../../../shared/services/trade-service/trade-service';
import { CounterParty } from '../../../shared/models/CounterParty';
import { Commodity } from '../../../shared/models/Commodity';
import { Location } from '../../../shared/models/location';
import { ReferenceService } from '../../../shared/services/refrerence-service/reference-service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MatIconRegistry } from '@angular/material';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'trade-detail',
  templateUrl: './trade-details.component.html',
  styleUrls: ['./trade-details.component.css'],
  providers: [DatePipe]
})
export class TradeDetailsComponent implements OnInit{

  public trade: Trade = new Trade();
  public isDisabled: boolean;
  public locations: Location[] =[];
  public counterparties: CounterParty[] = [];
  public commodities: Commodity[] = [];
  public tradeDate: Date;

  constructor(private _refService: ReferenceService,
           private _route: ActivatedRoute, 
           private _tradeService: TradeService,
           private _datePipe: DatePipe){
    this.isDisabled = true;
    this._route.params.subscribe(params => {
        this.getDetails(params['id']);
    });
    
  }

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

  private getDetails(id: string) {
    console.log("Trade ID recieved: "+ id);
    this.isDisabled = true;
    this._tradeService.getTrade(id).subscribe(
      (data: Trade) =>{
          this.trade = data;
          let tradeDateStr = this.trade.tradeDate.split("-").reverse().join("/");
          this.tradeDate =  new Date(tradeDateStr);
          console.log("Trade = "+JSON.stringify(this.trade));
      }
    );
    
  }

  private changeMode(mode: string): void{
    if('EDIT' === mode){
      this.isDisabled = false;
    } else{
      this.isDisabled = true;
    }
  }

  private showButtons(): string{
    return (this.isDisabled) ? "none" : "";
  }

  private updateTrade(){
    this.trade.tradeDate = this._datePipe.transform(this.tradeDate, 'dd-MM-yyyy');
    console.log(" NEw Trade = "+JSON.stringify(this.trade));
    // this._tradeService.
  }

}