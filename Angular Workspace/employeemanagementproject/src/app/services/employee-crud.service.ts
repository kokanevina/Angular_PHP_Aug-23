import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Employee } from '../classes/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudService {

  serverPath="http://localhost:3000/employees";
  constructor(private httpService:HttpClient ) {
   }
  getAllEmployees(){
    //console.log("in getAllEmployees");
    return this.httpService.get(this.serverPath); // all records
  }
  addEmployee(employee:Employee){
      return this.httpService.post(this.serverPath,employee); // new data
  }
  deleteEmployee(employeeId:number){
    return this.httpService.delete(this.serverPath+"/"+employeeId);
  }
  getEmployeeId(employeeId:number){
   return this.httpService.get(this.serverPath+"/"+employeeId); // single record
  }
  updateEmployee(employee:Employee){
    return this.httpService.put(this.serverPath+"/"+employee.id,employee);
  }

}
