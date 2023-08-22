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
   mobilePattern="[0-9]{10,10}";
  constructor(){ 
    this.registerForm=new FormGroup({
      customerName:new FormControl("",[Validators.required, Validators.pattern(this.namePattern)]),
      customerEmail:new FormControl("",[Validators.required, Validators.email]),
      customerAge:new FormControl("",[Validators.required, Validators.min(16), Validators.max(70)]),
      customerMobile:new FormControl("",[Validators.required, Validators.pattern(this.mobilePattern)]),
      customeruname:new FormControl("",[Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      customerPassword:new FormControl("",[Validators.required]),
      customerConfirmPassword:new FormControl("",[Validators.required])
    });
  }

  get cname(){
    return this.registerForm.get('customerName');
  }
  get cmail(){
    return this.registerForm.get('customerEmail');
  }
  get cage(){
    return this.registerForm.get('customerAge');
  }
  get cmobile(){
    return this.registerForm.get('customerMobile');
  }
  get username(){
    return this.registerForm.get('customeruname');
  }
  get password(){
    return this.registerForm.get('customerPassword');
  }
  get confirmpass(){
    return this.registerForm.get('customerConfirmPassword');
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