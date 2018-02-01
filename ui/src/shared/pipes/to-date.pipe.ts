import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'todate'})
export class ToDatePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;
    value = value.split("-").reverse().join("/");
    return new Date(value);
  }
}