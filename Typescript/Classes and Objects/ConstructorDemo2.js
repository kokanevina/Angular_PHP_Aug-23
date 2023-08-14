var BankAccount = /** @class */ (function () {
    /* constructor(accnum:number,holderId:number,balance:number,accountType:string){
        console.log("***in p constructor***");
        this.accountNum=accnum;
        this.holderId=holderId;
        this.accountBalance=balance;
        this.accountType=accountType;
    } */
    function BankAccount(accnum, holderId, balance, accountType) {
        if (accnum === void 0) { accnum = 0; }
        if (holderId === void 0) { holderId = 0; }
        if (balance === void 0) { balance = 0; }
        if (accountType === void 0) { accountType = "current"; }
        console.log("***in p constructor***");
        this.accountNum = accnum;
        this.holderId = holderId;
        this.accountBalance = balance;
        this.accountType = accountType;
    }
    /*Multiple constructor implementations are not allowed. */
    BankAccount.prototype.deposit = function (amount) {
        this.accountBalance = this.accountBalance + amount;
    };
    BankAccount.prototype.getDetails = function () {
        return "account number : ".concat(this.accountNum, "\n        accouner holder : ").concat(this.holderId, " \n        balance : ").concat(this.accountBalance, "\n        type: ").concat(this.accountType);
    };
    return BankAccount;
}());
var account1 = new BankAccount(23242526, 121212, 5000, "savings"); // call goes to constructor
console.log(account1.getDetails());
var account2 = new BankAccount(45464748, 323232, 10000, "savings"); // call goes to constructor
console.log(account2.getDetails());
account1.deposit(3000);
console.log(account1.accountBalance);
console.log(account2.accountBalance);
console.log(account1.getDetails());
console.log(account2.getDetails());
var account3 = new BankAccount(98989898, 666666);
console.log(account3.getDetails());
