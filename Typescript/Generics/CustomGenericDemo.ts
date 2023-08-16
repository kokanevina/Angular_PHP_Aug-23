

class Employee<T>{
    empId:T
    constructor(empId:T){
        this.empId=empId
    }
    getEmpId():T{
        return this.empId;
    }
}

let emp1=new Employee<number>(6677);
console.log(emp1.getEmpId());

let emp2=new Employee<string>("NEO123");
console.log(emp2.getEmpId());
