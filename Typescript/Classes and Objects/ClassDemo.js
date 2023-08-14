//Captial case : 1st letter
function abc() {
}
var lmn = function () {
};
var cube = function (num) { return num * num * num; };
// bydefault all properies in class are public
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.accountBalance = 1000;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.accountBalance = this.accountBalance + amount;
    };
    BankAccount.prototype.getDetails = function () {
        // return "account number:"+this.accountNum+"\naccount holder id:"+this.holderId+"\nbalance:"+this.accountBalance+"\ntype :"+this.accountType;
        return "account number : ".concat(this.accountNum, "\n        accouner holder : ").concat(this.holderId, " \n        balance : ").concat(this.accountBalance, "\n        type: ").concat(this.accountType);
    };
    return BankAccount;
}());
var account1 = new BankAccount(); // default constructor 
console.log(account1.accountNum);
console.log(account1.holderId);
console.log(account1.accountType);
console.log(account1.accountBalance);
// type of account1 ?  => BankAccount  // custom data types
var account2 = new BankAccount(); // default constructor 
console.log(account2.accountNum);
console.log(account2.holderId);
console.log(account2.accountType);
console.log(account2.accountBalance);
account1.deposit(3000);
console.log(account1.accountBalance); // 4000
console.log(account2.accountBalance); // 1000
console.log(account1.getDetails());
console.log(account2.getDetails());
