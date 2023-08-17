import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  empName="BBB";
  num1=0;
  num2=0;
  addition=0;
 
  constructor(){
    setTimeout(() => {
      this.empName="Vina"
    }, 3000);
  }

  test(eventObj:any):void{
   console.log(this.empName);
   console.log(eventObj);
  }
  test2():void{
    console.log("Event Generated");
    
  }
  add():void{
      this.addition=this.num1+this.num2;
  }
}
