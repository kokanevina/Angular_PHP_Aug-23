import { Component } from '@angular/core';
import { MathsService } from '../services/maths.service';

@Component({
  selector: 'app-math2',
  templateUrl: './math2.component.html',
  styleUrls: ['./math2.component.css'],
  providers:[MathsService] 
})
export class Math2Component {
  numArray=new Array<number>(4);
  mult=1;
  counter2=this.mathService.mathCounter;
  constructor(private mathService:MathsService){
    console.log("in math2 component");
    
  }
  multiply(){
    this.mult=this.mathService.mathMultiply(...this.numArray);
  }
  increment(){
    this.mathService.incrementCounter();
    this.counter2=this.mathService.getCounter();
  }
}
