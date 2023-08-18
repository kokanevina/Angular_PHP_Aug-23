import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  empName="BBB";
  num=0;
  num1=0;
  num2=0;
  addition=0;
  addition2=0;
  age=0;
  salaryArray=[56000,78000,34000,67000,78000,55000,67000];
  contacts=[
    {
      name:"kiran",
      contact: [7878989845,9090909090]
    },
    {
      name:"priti",
      contact: [8080808080,7676767676,7070707070]
    },
    {
      name:"pooja",
      contact: [888888888,9898989898]
    },
]

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

  templateTest(temp:any){
    console.log(temp);
    
  }
  add2(n1:any,n2:any){
    console.log(n1);
    console.log(n2);
    console.log(typeof n1);
    this.addition2=parseFloat(n1)+parseFloat(n2);
    
  }

}
