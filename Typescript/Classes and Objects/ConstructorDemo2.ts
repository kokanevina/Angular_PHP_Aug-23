
class BankAccount{
    accountNum:number;
    holderId:number;
    accountBalance:number;
    accountType:string;
    /* constructor(accnum:number,holderId:number,balance:number,accountType:string){
        console.log("***in p constructor***");   
        this.accountNum=accnum;
        this.holderId=holderId;
        this.accountBalance=balance;
        this.accountType=accountType;
    } */
    constructor(accnum=0,holderId=0,balance=0,accountType="current"){
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
        type: ${this.accountType}`; 
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

let account3=new BankAccount(98989898,666666);
console.log(account3.getDetails());

let account4=new BankAccount(56454556);
console.log(account4.getDetails());

let account5=new BankAccount(54545454,555555,34000);
console.log(account4.getDetails());

let account6=new BankAccount();