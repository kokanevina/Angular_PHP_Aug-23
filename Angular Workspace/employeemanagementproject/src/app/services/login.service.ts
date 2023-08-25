import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginFlag=false;
  adminUser="neoadmin";
  adminPassword="admin321";
  constructor() { }

  checkLogin(username:string,password:string):boolean{
    if(username===this.adminUser && password=== this.adminPassword)
      this.loginFlag=true;
    return this.loginFlag;
  }
}
