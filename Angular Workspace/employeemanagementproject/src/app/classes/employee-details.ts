export class EmployeeDetails {
    constructor(private employeeId=0,private employeeAge=0,private employeeExperience=0,private employeeAddress="",private employeeContact=0)
    {}
    get id(){
        return this.employeeId
    }
    set id(employeeId:number){
        this.employeeId=employeeId;
    }
    get age(){
        return this.employeeAge
    }
    set age(employeeAge:number){
        this.employeeAge=employeeAge;
    }
    get experience(){
        return this.employeeExperience
    }
    set experience(employeeExperience:number){
        this.employeeExperience=employeeExperience;
    }
    get address(){
        return this.employeeAddress
    }
    set address(employeeAddress:string){
        this.employeeAddress=employeeAddress;
    }
    get contact(){
        return this.employeeContact
    }
    set contact(employeeContact:number){
        this.employeeContact=employeeContact;
    }
}
