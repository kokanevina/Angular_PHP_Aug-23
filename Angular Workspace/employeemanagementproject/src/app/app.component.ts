import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="first angular project";
  flag=true;
  hideshow(){
    this.flag=!this.flag
  }

   testArray=new Array(2);
   
}
