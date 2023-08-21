import { Component } from '@angular/core';
import { Employee } from '../classes/employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees=new Array<Employee>();
  constructor(){
    this.employees.push(new Employee(321,"Kiran Patil",67000,"PHP Developer",new Date('12 Jun 2010'), "assets/Images/e321.jpg"));
    this.employees.push(new Employee(123,"Ravi Kumar",87000,"Java Developer",new Date('12 Jun 2009'),"assets/Images/e123.jpg"));
    this.employees.push(new Employee(111,"Niraj Salvi",92000,"PHP Developer",new Date('1 Jun 2009'),"assets/Images/e111.jpg"));
    this.employees.push(new Employee(434,"Amol Puranik",56000,"Java Developer",new Date('12 May 2015'),"assets/Images/e434.jpg"));
  }

  getEmployees(){
    // here u will get the data from service
  }

  cname="";
  receiver(ev:string){
    console.log("-----receiver function called----");
    
    console.log(ev);
    this.cname=ev;
    
  }
}

