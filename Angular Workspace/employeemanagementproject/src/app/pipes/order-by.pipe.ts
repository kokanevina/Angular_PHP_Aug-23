import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderByPipe implements PipeTransform {
  transform(array: any, ...args: any[]): any {
    if(args.length==0){
      if(typeof array[0]=='number')
        return array.sort((n1:number,n2:number)=>n1-n2); // makes comparison on values
      else if(typeof array[0]=='string')
        return array.sort();
    }
    else
       return this.customSort(array, args[0]);
  }
  customSort(array:any, key:string){ 
      return array.sort((o1:any, o2:any) => {
        let value1 = o1[key];let value2 = o2[key];
        if (value1 < value2) 
          return -1;
        else if (value1 > value2) 
          return 1;
        else 
          return 0;
    });
  }
}
