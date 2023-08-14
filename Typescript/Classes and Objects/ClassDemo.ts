//Captial case : 1st letter

function abc(){

}
let lmn=function(){

}
let cube=(num)=>num*num*num;

// bydefault all properies in class are public
class BankAccount{
    accountNum:number;
    holderId:number;
    accountBalance:number=1000;
    accountType:string;
    deposit(amount:number){
        this.accountBalance=this.accountBalance+amount;
    }
    getDetails():string  {
       // return "account number:"+this.accountNum+"\naccount holder id:"+this.holderId+"\nbalance:"+this.accountBalance+"\ntype :"+this.accountType;  
        return `account number : ${this.accountNum}
        accouner holder : ${this.holderId} 
        balance : ${this.accountBalance}
        type: ${this.accountType}`
    }
}

let account1= new BankAccount();  // default constructor 
console.log(account1.accountNum);
console.log(account1.holderId);
console.log(account1.accountType);console.log(account1.accountBalance);

// type of account1 ?  => BankAccount  // custom data types
let account2= new BankAccount();  // default constructor 
console.log(account2.accountNum);
console.log(account2.holderId);
console.log(account2.accountType);console.log(account2.accountBalance);

account1.deposit(3000);
console.log(account1.accountBalance);   // 4000
console.log(account2.accountBalance);   // 1000

console.log(account1.getDetails());
console.log(account2.getDetails());