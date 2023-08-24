import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.httpService.get(this.serverPath);
  }

  addEmployee(employee:Employee){
      return this.httpService.post(this.serverPath,employee);
  }
  deleteEmployee(employeeId:number){
    return this.httpService.delete(this.serverPath+"/"+employeeId);
  }
}
