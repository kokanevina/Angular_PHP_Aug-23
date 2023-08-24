export class Employee {
    private id:number;
    private employeeName:string;
    private employeeSalary:number;
    private employeeDesignation:string;
    private employeeJoiningDate:Date;
    private employeeImage:string
    constructor(id=0,employeeName="",employeeSalary=0,employeeDesignation="", employeeJoiningDate=new Date(), employeeImage="")
    {
        this.id=id;
        this.employeeName=employeeName;
        this.employeeSalary=employeeSalary
        this.employeeDesignation=employeeDesignation;
        this.employeeJoiningDate=employeeJoiningDate;
        this.employeeImage=employeeImage;
    }
    get eid(){
        return this.id;
    }
    set eid(id:number){
        this.id=id;
    }
    get ename(){
        return this.employeeName;
    }
    set ename(employeeName:string){
        this.employeeName=employeeName;
    }
    get esalary(){
        return this.employeeSalary;
    }
    set esalary(employeeSalary:number){
        this.employeeSalary=employeeSalary;
    }
    get edesignation(){
        return this.employeeDesignation;
    }
    set edesignation(employeeDesignation:string){
        this.employeeDesignation=employeeDesignation;
    }
    get ejoiningDate(){
        return this.employeeJoiningDate;
    }
    set ejoiningDate(employeeJoiningDate:Date){
        this.employeeJoiningDate=employeeJoiningDate;
    }
    get eimage(){
        return this.employeeImage;
    }
    set eimage(employeeImage:string){
        this.employeeImage=employeeImage;
    }

}
