import { Pipe, PipeTransform } from '@angular/core';
import { ReferenceService } from '../../shared/services/refrerence-service/reference-service';
import { Location } from '../models/location';

@Pipe({name: 'locationpipe'})
export class LocationPipe implements PipeTransform{
    private _locations: Map<string, string> = new Map();

    constructor(private _refservice: ReferenceService){
        this._refservice.getAllLocations().subscribe((data:Location[])=>{
            data.forEach( (c:Location)=> this._locations.set(c.code, c.name));
        });
    }



  transform(value: string, args: string[]): any {
    if (!value) return value;
    return this._locations.get(value);
  }
}