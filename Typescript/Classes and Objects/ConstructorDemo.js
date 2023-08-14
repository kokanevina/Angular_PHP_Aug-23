var BankAccount = /** @class */ (function () {
    function BankAccount() {
        console.log("***in constructor***");
        this.accountNum = 11112222;
        this.holderId = 101020;
        this.accountBalance = 1000;
        this.accountType = "savings";
    }
    BankAccount.prototype.deposit = function (amount) {
        this.accountBalance = this.accountBalance + amount;
    };
    BankAccount.prototype.getDetails = function () {
        return "account number : ".concat(this.accountNum, "\n        accouner holder : ").concat(this.holderId, " \n        balance : ").concat(this.accountBalance, "\n        type: ").concat(this.accountType);
    };
    return BankAccount;
}());
var account1 = new BankAccount(); // call goes to constructor
console.log(account1.getDetails());
var account2 = new BankAccount(); // call goes to constructor
console.log(account2.getDetails());
account1.deposit(3000);
console.log(account1.accountBalance);
console.log(account2.accountBalance);
console.log(account1.getDetails());
console.log(account2.getDetails());
