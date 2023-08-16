
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



interface StudIntf<T>{
    studId:T
}


class NeoStudent implements StudIntf<string>{
    studId:string
}

class SquadStudent implements StudIntf<number>{
    studId:number
}

let neo1=new NeoStudent();
let neo2=new NeoStudent();
let neo3=new NeoStudent();

let squad1=new SquadStudent();
