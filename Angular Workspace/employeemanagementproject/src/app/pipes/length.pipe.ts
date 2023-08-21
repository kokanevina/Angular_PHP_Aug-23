import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length' // use this name on html page
})
export class LengthPipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): number {
    //console.log("DESIGNATION:"+value);
    return value.length;
  }

}
