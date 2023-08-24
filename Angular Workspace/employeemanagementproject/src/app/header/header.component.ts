import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   projectTitle="Employee Management System";

   constructor(){
    setTimeout(() => {
      this.projectTitle="EMPLOYEE CRUD MODEL"
     // console.log(this.projectTitle);   
    }, 6000);
    
   }
}
