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
    }
]

  bcolor='aqua';
  fcolor='blue';
  colorarindex=0;
  colorArray=[{backgroundColor:'green',color:'yellow',},{backgroundColor:'red',color:'white',},{backgroundColor:'blue',color:'hotpink'}]
  colorObj={backgroundColor: this.bcolor, color: this.fcolor};
  styleClassArray=['w-50', 'bg-success', 'fontClass'];
  styleClassObject={
    'w-50':true,
    'bg-success':true,
    'fontClass':true
  }
   fontObject={
    fontSize:'40px'
  }
  constructor(){
    setTimeout(() => {
      this.empName="Vina"  
      this.styleClassArray.push('border');
      this.styleClassArray.push('border-5');
      this.styleClassArray.push('border-primary');
      this.styleClassArray.push('rounded-pill');
    }, 1000);

    setInterval(()=>{
        this.changeColor();
        this.styleClassArray.pop();
    },3000)
  }

  changeColor(){
  //  console.log("in function");
      this.colorObj=this.colorArray[this.colorarindex];
      this.bcolor=this.colorObj.backgroundColor;
      this.fcolor=this.colorObj.color;
      this.colorarindex++;
      if(this.colorarindex==this.colorArray.length)
        this.colorarindex=0;
  }

  test(eventObj:any):void{
  // console.log(this.empName);
   //console.log(eventObj);
  }
  test2():void{
   // console.log("Event Generated");
    
  }
  add():void{
      this.addition=this.num1+this.num2;
  }

  templateTest(temp:any){
    console.log(temp);
    
  }
  add2(n1:any,n2:any){
  //  console.log(n1);
   // console.log(n2);
   // console.log(typeof n1);
    this.addition2=parseFloat(n1)+parseFloat(n2);
    
  }

  linkObject={
    linkref:"https://www.google.com",
    linkName:"GOOGLE"
  }

  links=[
    {
      linkref:"https://www.tutorialspoint.com/index.htm",
      linkName:"TutorialsPoint"
    },

    {
      linkref:"https://www.w3schools.com",
      linkName:"W3Schools"
    },
    {
      linkref:"https://www.javatpoint.com",
      linkName:"JavatPoint"
    },

  ]
}
