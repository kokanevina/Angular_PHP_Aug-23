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
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getDetails = function () {
        return "ID:".concat(this.empId, "\n        NAME: ").concat(this.empName, "\n        NET SALARY: ").concat(this.empNetSalary);
    };
    Employee.prototype.getSalary = function () {
        console.log("Employee getSalary method");
        return this.empNetSalary;
    };
    return Employee;
}());
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Trainer.prototype.getDetails = function () {
        console.log("Trainer method");
        return "".concat(_super.prototype.getDetails.call(this), "  Specialized Tech: ").concat(this.specializedTech);
    };
    return Trainer;
}(Employee));
var InhouseTrainer = /** @class */ (function (_super) {
    __extends(InhouseTrainer, _super);
    function InhouseTrainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InhouseTrainer.prototype.getDetails = function () {
        console.log("InhouseTrainer method");
        return "".concat(_super.prototype.getDetails.call(this), "   // call goes to superclass method\n        Variable Pay : ").concat(this.variablePay, " \n        Extra Working Hrs ").concat(this.extraWorkingHrs);
    };
    InhouseTrainer.prototype.getSalary = function () {
        console.log("InhouseTrainer getSalary method");
        return this.empNetSalary + (this.variablePay * this.extraWorkingHrs);
    };
    return InhouseTrainer;
}(Trainer));
var VistingTrainer = /** @class */ (function (_super) {
    __extends(VistingTrainer, _super);
    function VistingTrainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VistingTrainer.prototype.getDetails = function () {
        return "".concat(this.getDetails(), "\n        Traning Hours: ").concat(this.trainingHrs, " \n        Pay : ").concat(this.pay);
    };
    VistingTrainer.prototype.getSalary = function () {
        console.log("VistingTrainer getSalary method");
        return this.trainingHrs * this.pay;
    };
    return VistingTrainer;
}(Trainer));
var emp;
emp = new Employee();
emp.empNetSalary = 78000;
var netSalary = emp.getSalary();
console.log("Net Salary of Common Employee:" + netSalary);
emp = new Trainer(); // upcasting
emp.empNetSalary = 89000;
var netSalary1 = emp.getSalary(); // call going to super class method
console.log("Net Salary of Trainer:" + netSalary1);
var inhouseTrainer = new InhouseTrainer();
inhouseTrainer.empNetSalary = 89000;
inhouseTrainer.variablePay = 200;
inhouseTrainer.extraWorkingHrs = 30;
var netSalary2 = inhouseTrainer.getSalary(); // overriding
console.log("Net Salary of Trainer:" + netSalary2); // overriding
