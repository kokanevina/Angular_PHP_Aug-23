import { Component, EventEmitter, Input, Output, OnInit,OnDestroy } from '@angular/core';
import { Employee } from '../classes/employee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit, OnDestroy{
  @Input() 
  employee:Employee=new Employee();
  companyName="Seed Infotech Ltd.";  
  @Output()  
  emitter=new EventEmitter<string>();
  constructor(){
    setTimeout(()=>{
      this.companyName="Sqaud Infotech Ltd."
      this.emitter.emit(this.companyName); 
    },5000);
  }
  ngOnInit(){
    console.log("----------EmployeeCard init lifecycle method");
    this.emitter.emit(this.companyName);  // component lifecycle method  (constructors dont emit events)
  }
  ngOnDestroy(): void {
    console.log("----------EmployeeCard destroy lifecycle method");
  }
}
