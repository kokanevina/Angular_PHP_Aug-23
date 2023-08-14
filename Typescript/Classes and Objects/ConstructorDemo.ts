
class BankAccount{
    accountNum:number;
    holderId:number;
    accountBalance:number;
    accountType:string;
    constructor(){
        console.log("***in constructor***");   
        this.accountNum=11112222;
        this.holderId=101020;
        this.accountBalance=1000;
        this.accountType="savings";
    }
    deposit(amount:number){
        this.accountBalance=this.accountBalance+amount;
    }
    getDetails():string  {
        return `account number : ${this.accountNum}
        accouner holder : ${this.holderId} 
        balance : ${this.accountBalance}
        type: ${this.accountType}`
    }
}

let account1= new BankAccount();  // call goes to constructor
console.log(account1.getDetails()); 
let account2= new BankAccount();   // call goes to constructor
console.log(account2.getDetails());
account1.deposit(3000);
console.log(account1.accountBalance);   
console.log(account2.accountBalance);   
console.log(account1.getDetails());
console.log(account2.getDetails());