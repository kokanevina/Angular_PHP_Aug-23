import { Component } from '@angular/core';
import { EmployeeDetails } from '../classes/employee-details';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  details=new Array<EmployeeDetails>();
  routeParameter=0;
  empDetails:EmployeeDetails=new EmployeeDetails();
  name="";
  constructor(private routeService:ActivatedRoute){
    this.details.push(new EmployeeDetails(321,34,12, "abc pqr, Ghansoli, Navi mumbai", 7878787878));
    this.details.push(new EmployeeDetails(311,55,20., "aa, bb, Rabale , Navi mumbai",9090909090));
    this.details.push(new EmployeeDetails(123,66,30, 'ppp ppp, Airoli, Navi mumbai',9898989898));
    this.details.push(new EmployeeDetails(111,32,10, 'aaa,aaa, Ghansoli, Navi mumbai',8888888888));
    this.details.push(new EmployeeDetails(12,32,10,'abc abc, "Thane, Mumbai',7979797979));
    this.details.push(new EmployeeDetails(134,55,21,"xyz xyz, Mulund, Mumbai",9797979797)); 
  }
  ngOnInit(){
    // data extracting from route 12
    this.routeParameter=parseInt(this.routeService.snapshot.paramMap.get('empId'));
    this.name=this.routeService.snapshot.paramMap.get('empName');
    this.search();
  }
  search(){
    this.empDetails=this.details.find(detailsObj=>detailsObj.id===this.routeParameter);
  }
}
