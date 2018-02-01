import { Injectable } from "@angular/core";
import { CounterParty } from "../models/CounterParty";
import { Commodity } from "../models/Commodity";
import { Location } from "../models/location";


@Injectable()
export class ReferenceDataStore{
    private locations: Location[] =[];
  private counterparties: CounterParty[] = [];
  private commodities: Commodity[] = [];
}