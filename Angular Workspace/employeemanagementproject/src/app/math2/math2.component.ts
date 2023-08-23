import { Component } from '@angular/core';
import { MathsService } from '../services/maths.service';

@Component({
  selector: 'app-math2',
  templateUrl: './math2.component.html',
  styleUrls: ['./math2.component.css']
})
export class Math2Component {
  numArray=new Array<number>(4);
  mult=1;
  constructor(private mathService:MathsService){
    console.log("in math2 component");
    
  }
  multiply(){
    this.mult=this.mathService.mathMultiply(...this.numArray);
  }
  divide(){

  }
}
