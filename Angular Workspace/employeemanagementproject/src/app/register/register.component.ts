import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   registerForm:FormGroup;
  constructor(){ 
    this.registerForm=new FormGroup({
      customerName:new FormControl(),
      customerEmail:new FormControl(),
      customerAge:new FormControl(),
      customerMobile:new FormControl(),
      customeruname:new FormControl(),
      customerPassword:new FormControl(),
      customerConfirmPassword:new FormControl()
    });
  }
}
