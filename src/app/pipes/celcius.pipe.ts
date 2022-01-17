import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celcius'
})
export class CelciusPipe implements PipeTransform {
  tempValue!: number;

  transform(value: number, ...args: unknown[]): unknown {
    this.tempValue = (value - 273.15);
    return this.tempValue.toFixed(1);
  }

}
