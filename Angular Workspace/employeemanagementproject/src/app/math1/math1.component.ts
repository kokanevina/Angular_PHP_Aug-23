import { Component } from '@angular/core';
import { MathsService } from '../services/maths.service';
@Component({
  selector: 'app-math1',
  templateUrl: './math1.component.html',
  styleUrls: ['./math1.component.css']
})
export class Math1Component {
 num1=0;num2=0;num3=0;num4=0;
 sum=0;
 numArray:number[]=new Array();
  constructor(private maths:MathsService){
    console.log("in math1 component");
    
  }
  add(){
    this.sum=this.maths.mathAdd(this.num1,this.num2,this.num3,this.num4);
    // component requires service to add numbers from array
  }
}
