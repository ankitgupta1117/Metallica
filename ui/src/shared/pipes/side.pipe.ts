import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'side'})
export class SidePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;
    if('B' == value){
        return "Buy";
    }else if('S' == value){
        return "Sell";
    }
    return value;
  }
}