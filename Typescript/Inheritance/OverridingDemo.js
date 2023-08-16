var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Trainer = /** @class */ (function () {
    function Trainer() {
    }
    /*   constructor(trainerId=0,trainerName="AAA",specializedTech="XXX"){
          this.trainerId=trainerId;
          this.trainerName=trainerName;
          this.specializedTech=specializedTech;
      } */
    Trainer.prototype.getDetails = function () {
        console.log("Trainer method");
        return "Id: ".concat(this.trainerId, " \n        Name: ").concat(this.trainerName, " \n        Specialized techonology: ").concat(this.specializedTech);
    };
    return Trainer;
}());
var InhouseTrainer = /** @class */ (function (_super) {
    __extends(InhouseTrainer, _super);
    function InhouseTrainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InhouseTrainer.prototype.getDetails = function () {
        console.log("InhouseTrainer method");
        var details = _super.prototype.getDetails.call(this);
        return "".concat(details, "   \n        id: Salary: ").concat(this.trainerSalary, " \n        Variable Pay : ").concat(this.variablePay, " \n        Extra Working Hrs ").concat(this.extraWorkingHrs);
    };
    InhouseTrainer.prototype.getSalary = function () {
        return this.trainerSalary + (this.variablePay * this.extraWorkingHrs);
    };
    return InhouseTrainer;
}(Trainer));
var VistingTrainer = /** @class */ (function (_super) {
    __extends(VistingTrainer, _super);
    function VistingTrainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VistingTrainer.prototype.getVtrDetails = function () {
        return "Traning Hours: ".concat(this.trainingHrs, " \n        Pay : ").concat(this.pay);
    };
    VistingTrainer.prototype.getSalary = function () {
    };
    return VistingTrainer;
}(Trainer));
var trainer = new Trainer();
trainer.trainerId = 8000;
trainer.trainerName = "Pooja";
trainer.specializedTech = "PHP";
console.log(trainer.getDetails());
var inhousetr1 = new InhouseTrainer(); // super object, sub object
inhousetr1.trainerId = 1000;
inhousetr1.trainerName = "Hari";
inhousetr1.specializedTech = "Java";
inhousetr1.trainerSalary = 90000;
inhousetr1.extraWorkingHrs = 30;
inhousetr1.variablePay = 200;
// protected properties from subclass even can not be accessed via subclass object outside of subclass
console.log(inhousetr1.getDetails()); // method overriding
console.log(inhousetr1.getSalary());
// do the same for visiting trainer
