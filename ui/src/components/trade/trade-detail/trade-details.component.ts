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
import { ReferenceDataStore } from '../../../shared/services/ref-data-store';

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

  constructor(private refData: ReferenceDataStore,
           private _route: ActivatedRoute, 
           private _tradeService: TradeService,
           private _datePipe: DatePipe){
    this.isDisabled = true;
    this._route.params.subscribe(params => {
        this.getDetails(params['id']);
    });
    
  }

  ngOnInit(){
    this.locations.push.apply(this.locations,this.refData.getLocations());
      this.commodities.push.apply(this.commodities, this.refData.getCommodities());
      this.counterparties.push.apply(this.counterparties,this.refData.getCounterparties());
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
    this._tradeService.updateTrade(this.trade).subscribe( data =>{
      console.log("Trade updated "+ data);
  });
  }

}