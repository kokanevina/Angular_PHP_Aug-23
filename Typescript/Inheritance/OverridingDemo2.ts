class Employee{
    empId:number;
    empName:string;
    empNetSalary:number;
    getDetails(){
        return `ID:${this.empId}
        NAME: ${this.empName}
        NET SALARY: ${this.empNetSalary}`
    }
    getSalary():number{
        console.log("Employee getSalary method");   
        return this.empNetSalary;
    }
}
class Trainer extends Employee{
    specializedTech:string;   
    getDetails(){
        console.log("Trainer method");
        return `${super.getDetails()}  Specialized Tech: ${this.specializedTech}`
    }
}

class InhouseTrainer extends Trainer{
    variablePay: number;
    extraWorkingHrs:number;
    getDetails(){
        console.log("InhouseTrainer method");   
        return `${super.getDetails()}   // call goes to superclass method
        Variable Pay : ${this.variablePay} 
        Extra Working Hrs ${this.extraWorkingHrs}`
    }
    getSalary():number{
        console.log("InhouseTrainer getSalary method");
        
       return this.empNetSalary+(this.variablePay*this.extraWorkingHrs);
    }
}

class VistingTrainer extends Trainer{
    trainingHrs:number;
    pay:number;
    getDetails(){
        return `${this.getDetails()}
        Traning Hours: ${this.trainingHrs} 
        Pay : ${this.pay}`
    }
    getSalary():number{
        console.log("VistingTrainer getSalary method");
        return this.trainingHrs*this.pay;
    }
}


let emp=new Employee();
emp.empNetSalary=78000;
let netSalary=emp.getSalary();
console.log("Net Salary of Common Employee:"+netSalary);

let trainer=new Trainer(); // upcasting
trainer.empNetSalary=89000;
let netSalary1=trainer.getSalary();  // call going to super class method
console.log("Net Salary of Trainer:"+netSalary1);

let inhouseTrainer=new InhouseTrainer();
inhouseTrainer.empNetSalary=89000;
inhouseTrainer.variablePay=200;
inhouseTrainer.extraWorkingHrs=30;
let netSalary2=inhouseTrainer.getSalary(); // overriding
console.log("Net Salary of Trainer:"+netSalary2);


// visting trainer