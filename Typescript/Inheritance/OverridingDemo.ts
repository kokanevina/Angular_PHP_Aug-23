class Trainer{
    trainerId:number;
    trainerName:string;
    specializedTech:string;    // protected properties accessed only within subclasses
    private ucode:number // private properties can not be inherited
  /*   constructor(trainerId=0,trainerName="AAA",specializedTech="XXX"){
        this.trainerId=trainerId;
        this.trainerName=trainerName;
        this.specializedTech=specializedTech;
    } */

    getDetails(){
        console.log("Trainer method");
        return `Id: ${this.trainerId} 
        Name: ${this.trainerName} 
        Specialized techonology: ${this.specializedTech}`
    }
}

class InhouseTrainer extends Trainer{
    trainerSalary:number;
    variablePay: number;
    extraWorkingHrs:number;

    getDetails(){
        console.log("InhouseTrainer method");   
        return `${super.getDetails()}   // call goes to superclass method
         Salary: ${this.trainerSalary} 
        Variable Pay : ${this.variablePay} 
        Extra Working Hrs ${this.extraWorkingHrs}`
    }

    getSalary():number{
       return this.trainerSalary+(this.variablePay*this.extraWorkingHrs);
    }
}

class VistingTrainer extends Trainer{
    trainingHrs:number;
    pay:number;

    getDetails(){
        return `Traning Hours: ${this.trainingHrs} 
        Pay : ${this.pay}`
    }

    getSalary(){
      // calculate
    }
}

let trainer=new Trainer();
trainer.trainerId=8000;
trainer.trainerName="Pooja";
trainer.specializedTech="PHP";
console.log(trainer.getDetails());

let inhousetr1=new InhouseTrainer(); // super object, sub object
inhousetr1.trainerId=1000;
inhousetr1.trainerName="Hari";
inhousetr1.specializedTech="Java";
inhousetr1.trainerSalary=90000;
inhousetr1.extraWorkingHrs=30;
inhousetr1.variablePay=200;
// protected properties from subclass even can not be accessed via subclass object outside of subclass
console.log(inhousetr1.getDetails()); // method overriding  // common+unique

console.log(inhousetr1.getSalary());

// do the same for visiting trainer

let visitingtr1=new VistingTrainer();
visitingtr1.getDetails();   // method overriding                    // common+unique