import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   registerForm:FormGroup;
   namePattern="[A-Za-z ]*";
   nameP=new RegExp("[A-Za-z ]*");
  constructor(){ 
    this.registerForm=new FormGroup({
      customerName:new FormControl("",[Validators.required, Validators.pattern(this.namePattern)]),
      customerEmail:new FormControl("",[Validators.required]),
      customerAge:new FormControl("",[Validators.required]),
      customerMobile:new FormControl("",[Validators.required]),
      customeruname:new FormControl("",[Validators.required]),
      customerPassword:new FormControl("",[Validators.required]),
      customerConfirmPassword:new FormControl("",[Validators.required])
    });
  }

  get cname(){
    return this.registerForm.get('customerName');
  }
}

/*
   requiredValidator(){
    to test whether the field is empty or not
    if(field is not empty)
      return null
    else
      { 'required':true}
   }
*/