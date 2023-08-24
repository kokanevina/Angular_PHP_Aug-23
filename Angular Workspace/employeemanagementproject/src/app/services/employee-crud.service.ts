import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
