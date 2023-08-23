import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathsService {

  constructor() {
    console.log("-----in Maths Service");
    
   }

  mathAdd(...args:number[]):number{
      return args.reduce((acc,ele)=>acc+ele);
  }
  mathSubtract(...args:number[]):number{
    return args.sort((n1,n2)=>n1-n2).reverse().reduce((acc,ele)=>acc-ele);
  }
  mathMultiply(...args:number[]):number{
    return args.reduce((acc,ele)=>acc*ele);
  }
}
