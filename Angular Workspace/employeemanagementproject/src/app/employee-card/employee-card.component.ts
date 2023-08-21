import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../classes/employee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent {

  @Input() // input coming from parent 
  employee:Employee=new Employee();

 
  companyName="Seed Infotech Ltd.";   //1. declare the data to give to parent

  @Output()  // output going to parent
  emitter=new EventEmitter<string>();   //2.
  // emitting event : lifecycle methods, function
  
  // component lifecycle method  (constructors dont emit events)
  ngOnInit(){
    console.log("EmployeeCard lifecycle method");
    this.emitter.emit(this.companyName);  //3.
  }
}
