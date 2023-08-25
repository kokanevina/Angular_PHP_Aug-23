export class Employee {
    private employeeId:number;
    private employeeName:string;
    private employeeSalary:number;
    private employeeDesignation:string;
    private employeeJoiningDate:Date;
    private employeeImage:string
    constructor(employeeId=0,employeeName="",employeeSalary=0,employeeDesignation="", employeeJoiningDate=new Date(), employeeImage="")
    {
        this.employeeId=employeeId;
        this.employeeName=employeeName;
        this.employeeSalary=employeeSalary
        this.employeeDesignation=employeeDesignation;
        this.employeeJoiningDate=employeeJoiningDate;
        this.employeeImage=employeeImage;
    }
    get id(){
        return this.employeeId;
    }
    set id(employeeId:number){
        this.employeeId=employeeId;
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
