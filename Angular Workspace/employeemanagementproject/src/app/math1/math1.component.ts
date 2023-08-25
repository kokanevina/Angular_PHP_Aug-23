import { Component,OnInit,OnDestroy } from '@angular/core';
import { MathsService } from '../services/maths.service';

@Component({
  selector: 'app-math1',
  templateUrl: './math1.component.html',
  styleUrls: ['./math1.component.css'],
  providers:[MathsService] /* new seperate object of MathsService */
})
export class Math1Component implements OnInit,OnDestroy {
 num1=0;num2=0;num3=0;num4=0;
 sum=0;
 sub=0;
 counter1=this.maths.mathCounter;
 numArray:number[]=new Array();
  constructor(private maths:MathsService){
    console.log("in math1 component");
  }
  
  add(){
    this.sum=this.maths.mathAdd(this.num1,this.num2,this.num3,this.num4);
    // component requires service to add numbers from array
  }
  subtract(){
    this.sub=this.maths.mathSubtract(this.num1,this.num2,this.num3,this.num4);
  }
  increment(){
    this.maths.incrementCounter();
    this.counter1=this.maths.getCounter();
  }
  ngOnInit(){
    console.log("in init method math1");
    
  }
  ngOnDestroy(): void {
    console.log("in destroy method math1");
  }
}
