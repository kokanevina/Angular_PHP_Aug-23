import { AbstractControl, AbstractControlOptions, FormGroup, ValidatorFn } from "@angular/forms";

export class CustomValidator {
   passwordMatch(regForm:FormGroup) : null | {} {
    
    let password=regForm.get("customerPassword")?.value;
    let cpass=regForm.get("customerConfirmPassword")?.value
    if(password==cpass)
        return null;
    else
        return { passwordmatch : true}
   }

}
