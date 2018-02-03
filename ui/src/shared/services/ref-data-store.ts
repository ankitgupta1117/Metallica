import { Injectable } from "@angular/core";
import { CounterParty } from "../models/CounterParty";
import { Commodity } from "../models/Commodity";
import { Location } from "../models/location";
import { ReferenceService } from "./refrerence-service/reference-service";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/zip";


@Injectable()
export class ReferenceDataStore {
  private locations: Location[] = [];
  private counterparties: CounterParty[] = [];
  private commodities: Commodity[] = [];

  constructor(private refService: ReferenceService) {
    console.log("Refernce Data Store Constructed.")
  }

  public init(): Promise<any>{
    return new Promise<boolean> ((resolve) =>{
      console.log("Calling services to get Refernce Data");
      let that = this;
      Observable.zip(this.refService.getAllCommodities()
                                , this.refService.getAllCounterParties()
                                , this.refService.getAllLocations())
                .subscribe( (a : [Commodity[], CounterParty[], Location[]]) =>{
                        console.log(a[0]);
                        console.log(a[1]);
                        console.log(a[2]);
                        that.commodities = a[0];
                        that.counterparties = a[1];
                        that.locations = a[2];
                        resolve(true);                        
                })
    });   
  }

  public getCommodities(): Commodity[]{
    return this.commodities;
  }

  public getCounterparties(): CounterParty[]{
    return this.counterparties;
  }

  public getLocations(): Location[]{
    return this.locations;
  }



}