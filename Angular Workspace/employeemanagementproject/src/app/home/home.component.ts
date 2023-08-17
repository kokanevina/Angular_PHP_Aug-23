import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  empName="BBB";

  constructor(){
    setTimeout(() => {
      this.empName="Vina"
    }, 3000);
  }

  test():void{
   console.log(this.empName);
  }
}
