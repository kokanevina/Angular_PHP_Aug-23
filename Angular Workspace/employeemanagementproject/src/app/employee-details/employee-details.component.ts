import { Component } from '@angular/core';
import { EmployeeDetails } from '../classes/employee-details';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  details=new Array<EmployeeDetails>();

  constructor(){
    this.details.push(new EmployeeDetails(321,34,12, "abc pqr, Ghansoli, Navi mumbai", 7878787878));
    this.details.push(new EmployeeDetails(311,55,20., "aa, bb, Rabale , Navi mumbai",9090909090));
    this.details.push(new EmployeeDetails(123,66,30, 'ppp ppp, Airoli, Navi mumbai',9898989898));
    this.details.push(new EmployeeDetails(111,32,10, 'aaa,aaa, Ghansoli, Navi mumbai',8888888888));
    this.details.push(new EmployeeDetails(12,32,10,'abc abc, "Thane, Mumbai',7979797979));
    this.details.push(new EmployeeDetails(134,55,21,"xyz xyz, Mulund, Mumbai",9797979797)); 
  }
}
