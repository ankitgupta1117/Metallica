import {Component, OnInit} from '@angular/core';
import {ReferenceService} from '../../../shared/services/refrerence-service/reference-service';
import {Location} from '../../../shared/models/location';
import {CounterParty} from '../../../shared/models/CounterParty';
import {Commodity} from '../../../shared/models/Commodity';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { TradeService } from '../../../shared/services/trade-service/trade-service';
import { DatePipe } from '@angular/common';
import { Trade } from '../../../shared/models/trade';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ReferenceDataStore } from '../../../shared/services/ref-data-store';

@Component({
  selector: 'trade-search',
  templateUrl: './trade-search.component.html',
  styleUrls: ['./trade-search.component.css'],
  providers: [ReferenceService, TradeService, DatePipe]
})
export class TradeSearchComponent implements  OnInit{

  public locations: Location[] =[ {code: '',
          name: 'All'}];
  public counterparties: CounterParty[] = [{id: '', name: 'All'}];
  public commodities: Commodity[] = [{code: '', description: 'All'}];
  public searchForm: FormGroup;
  @Output()
  private onSearch: EventEmitter<Trade[]> = new EventEmitter();


  constructor(private refData: ReferenceDataStore, private _tradeService: TradeService,
                            private _datePipe : DatePipe, private _snakBar: MatSnackBar){
  }

  ngOnInit(): void {

    this.searchForm = new FormGroup({
      fromDate: new FormControl(new Date()),
      toDate: new FormControl(new Date()),
      commodity: new FormControl(''),
      counterparty: new FormControl(''),
      location: new FormControl('')
    });

    this.locations.push.apply(this.locations,this.refData.getLocations());
    this.commodities.push.apply(this.commodities, this.refData.getCommodities());
    this.counterparties.push.apply(this.counterparties,this.refData.getCounterparties());
  
    console.log("Search component initialized");
  }

  public doSearch(){
    console.log(this.searchForm.value);
    let fromDateVal = this._datePipe.transform(this.searchForm.controls.fromDate.value, 'dd-MM-yyyy');
    let toDateVal = this._datePipe.transform(this.searchForm.controls.toDate.value, 'dd-MM-yyyy');
    let commodityVal = this.searchForm.controls.commodity.value;
    let counterpartyVal = this.searchForm.controls.counterparty.value;
    let locationVal = this.searchForm.controls.location.value;
    let searchResult: Trade[];
    this._tradeService.searchTrades(fromDateVal, toDateVal, commodityVal, counterpartyVal, locationVal)
              .subscribe( (data: Trade[]) =>{
                searchResult = data;
                console.log(searchResult);
                this.onSearch.emit(data);
                this._snakBar.open("Trades found: "+data.length.toString(),"", {duration: 4000});
              });
  }

  public doReset(){
    this.searchForm.reset();
    this.searchForm.controls.commodity.setValue(' ');
  }

  public getErrorMessage(fromContrlName: string): string{
    // console.log("dfs"+ fromContrlName);
    if(fromContrlName == "fromDate") {
      return "Enter a Valid Date";
    }
  }

  public isDateValid(): boolean{
    return false;
  }
}
