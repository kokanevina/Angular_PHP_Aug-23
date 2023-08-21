import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'index'
})
export class IndexPipe implements PipeTransform {
  transform(value: string, ...args: any[]): number {
    let flag=true;
    if(args.length==2)
      flag=args[1];
    if(flag)
      return value.indexOf(args[0]);  // case sensitive
    else
      return value.toLowerCase().indexOf(args[0].toLowerCase()); // case insensitive
  }
}
