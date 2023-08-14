// all properies in class have public scope bydefault
class BankAccount {
    constructor(accnum = 0, holderId = 0, balance = 0, accountType = "current") {
        console.log("***in p constructor***");
        this.accountNum = accnum;
        this.holderId = holderId;
        this.accountBalance = balance;
        this.accountType = accountType;
    }
    // public 
    get balance() {
        return this.accountBalance;
    }
    deposit(amount) {
        this.accountBalance = this.accountBalance + amount;
    }
    getDetails() {
        return `account number : ${this.accountNum}
        accouner holder : ${this.holderId} 
        balance : ${this.accountBalance}
        type: ${this.accountType}`;
    }
} // scope of private properties is within class
let account1 = new BankAccount(23242526, 121212, 5000, "savings"); // call goes to constructor
console.log(account1.getDetails());
//console.log(account1.accountBalance); // direct access
console.log(account1.balance); // get property
console.log(account1.accountNum);
