import { Component } from '@angular/core';

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
  login(loginForm:any){
    this.user=loginForm.value;
    console.log(this.user);
    console.log(this.user.username);
    
    
  }
}
