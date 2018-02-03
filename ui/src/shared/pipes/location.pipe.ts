import { Pipe, PipeTransform } from '@angular/core';
import { Location } from '../models/location';
import { ReferenceDataStore } from '../services/ref-data-store';

@Pipe({name: 'locationpipe'})
export class LocationPipe implements PipeTransform{
    private _locations: Map<string, string> = new Map();

    constructor(private refDataStore: ReferenceDataStore){
        this.refDataStore.getLocations()
                            .forEach( (c:Location)=> this._locations.set(c.code, c.name) );
        // this._refservice.getAllLocations().subscribe((data:Location[])=>{
        //     data.forEach( (c:Location)=> this._locations.set(c.code, c.name));
        // });
    }



  transform(value: string, args: string[]): any {
    if (!value) return value;
    return this._locations.get(value);
  }
}