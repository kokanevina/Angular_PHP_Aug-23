import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user={
    username:'',
    password:''
  }
  flag=this.loginService.loginFlag;
  loginMessage="";
  constructor(private loginService:LoginService, private _router:Router){
  }
  login(loginForm:any){
   this.user=loginForm.value;
   console.log(this.user);
   let b=this.loginService.checkLogin(this.user.username, this.user.password);
    if(b){
      this.flag=this.loginService.loginFlag;{
      window.alert("You are Logged in Successfully.....");
        this._router.navigate(['home']);
      }
    }
    else{
      this.flag=this.loginService.loginFlag;
      this.loginMessage="Incorrect username or password";
    }
  }
}
