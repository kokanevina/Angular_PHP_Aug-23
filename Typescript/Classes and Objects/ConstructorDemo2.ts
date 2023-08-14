
class BankAccount{
    accountNum:number;
    holderId:number;
    accountBalance:number;
    accountType:string;
    constructor(accnum:number,holderId:number,balance:number,accountType:string){
        console.log("***in p constructor***");   
        this.accountNum=accnum;
        this.holderId=holderId;
        this.accountBalance=balance;
        this.accountType=accountType;
    }
    /*Multiple constructor implementations are not allowed. */
    
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

let account1= new BankAccount(23242526,121212,5000,"savings");  // call goes to constructor
console.log(account1.getDetails()); 
let account2= new BankAccount(45464748,323232,10000,"savings");   // call goes to constructor
console.log(account2.getDetails());
account1.deposit(3000);
console.log(account1.accountBalance);   
console.log(account2.accountBalance);   
console.log(account1.getDetails());
console.log(account2.getDetails());