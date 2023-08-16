interface EmployeeIntf{
    salary:number;    // variable sig
    getSalary():number;   // method sig
    ta?:number;
    getTA?():number;
}
// class must override the methods declared in the interfaces
class NeoEmployee implements EmployeeIntf{
    salary:number;
    ta:number;
    getSalary():number{
        return this.salary+5670+3456;
    }
    getTA():number{
        return 0;
    }
}
class SquadEmployee implements EmployeeIntf{
    salary:number;
    getSalary():number{
        return this.salary+345+2222;
    }   
}
let emp:EmployeeIntf;
emp=new NeoEmployee();
emp.salary=56;
emp=new SquadEmployee();
emp.salary=12;