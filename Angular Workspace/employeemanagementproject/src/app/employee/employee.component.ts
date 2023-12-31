import { Component } from '@angular/core';
import { Employee } from '../classes/employee';
import { EmployeeCrudService } from '../services/employee-crud.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  openFlag=false;
  updateFlag=false;
  employees=new Array<Employee>();
  empForm:FormGroup;
  employee=new Employee();
  imageFile:File;
  constructor(private crudService:EmployeeCrudService ){
   /*  this.employees.push(new Employee(321,"Kiran rana Patil",67000.64578,"php Developer",new Date('12 Jun 2010'), "assets/Images/e321.jpg"));
    this.employees.push(new Employee(311,"sudhakar puri",67000,"python Developer",new Date('12 Jun 2010'), "assets/Images/e321.jpg"));
    this.employees.push(new Employee(123,"ravi Kumar",87000.4365,"java Developer",new Date('12 Jun 2009'),"assets/Images/e123.jpg"));
    this.employees.push(new Employee(111,"Niraj SalvI",92000.786,"PHP Developer",new Date('1 Jun 2009'),"assets/Images/e111.jpg"));
    this.employees.push(new Employee(12,"AmOl Puranik",56000.33,"Java Developer",new Date('12 May 2015'),"assets/Images/e434.jpg"));
    this.employees.push(new Employee(134,"Suman Puranik",1356000.7,"Python Developer",new Date('13 Aug 2015'),"assets/Images/e434.jpg")); */
    
    this.empForm=new FormGroup({
      id:new FormControl(this.employee.id),
      ename:new FormControl(this.employee.ename),
      esalary: new FormControl(this.employee.esalary),
      edesignation: new FormControl(this.employee.edesignation),
      ejoiningDate: new FormControl(this.employee.ejoiningDate)
    });
   this.getEmployees();
  }
  getEmployees(){
      this.crudService.getAllEmployees().subscribe({
        next:(data)=>this.employees=data as Employee[],
        error:(error)=>console.log(error)
      }
    );
  }
 
  collectEmp():void{
    this.employee=this.empForm.value;
    if(this.updateFlag)
      this.update();
    else
      this.add();
  }
  add(){
    this.crudService.addEmployee(this.employee).subscribe({
      next:(success)=>{this.getEmployees();window.alert("Employee Added.......");},
      error:(err)=>console.log(err)
    });
  }
  update(){
    this.crudService.updateEmployee(this.employee).subscribe({
      next:(success)=>{this.getEmployees(); window.alert("Employee Updated.......");},
      error:(err)=>console.log(err)
    });
    this.updateFlag=false;
  }
  delete(employeeId:number){
   let b= window.confirm("Do you really want to delete?");
    if(b){
      this.crudService.deleteEmployee(employeeId).subscribe({
        next:(success)=>this.getEmployees(),
        error:(err)=>console.log(err)
      });
    }
  }
  search(employeeId:number){
      this.crudService.getEmployeeId(employeeId).subscribe({
        next:(data)=>{this.employee = data as Employee; 
          this.empForm.controls['id'].setValue(this.employee.id); 
          this.empForm.controls['ename'].setValue(this.employee.ename); 
          this.empForm.controls['esalary'].setValue(this.employee.esalary); 
          this.empForm.controls['edesignation'].setValue(this.employee.edesignation); 
          this.empForm.controls['ejoiningDate'].setValue(this.employee.ejoiningDate); 
          this.updateFlag=true;
        },
        error:(err)=>console.log(err)
      });
      this.openFlag=true;
  }
  cname="";
  receiver(ev:string){
   // console.log("-----receiver function called----");
  //  console.log(ev);
    this.cname=ev;
  }
  today=new Date();
  orderKey="eid";
  sendKey(key:string){
    this.orderKey=key;
  }

  /* getFile(event:any){
    const file: File=event.target.files[0];
    this.imageFile=file;
    this.empForm.controls['eimage'].setValue(this.imageFile); 
    console.log(this.empForm.value.eimage);
  } */
}

