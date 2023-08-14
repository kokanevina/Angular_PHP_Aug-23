// all properies in class have public scope bydefault
class BankAccount{
    private accountNum:number;
    private holderId:number;
    private accountBalance:number;
    private accountType:string;
    constructor(accnum=0,holderId=0,balance=0,accountType="current"){
        console.log("***in p constructor***");   
        this.accountNum=accnum;
        this.holderId=holderId;
        this.accountBalance=balance;
        this.accountType=accountType;
    }
    // public 
    get balance(){
        return this.accountBalance;
    }
    set balance(accountBalance:number){
        this.accountBalance=accountBalance;
    }
    get accnumber(){
        return this.accountNum;
    }
    set accnumber(accountNum:number){
        this.accountNum=accountNum;
    }
    // make 2 more get and set properties for remaining variables

    deposit(amount:number){
        this.accountBalance=this.accountBalance+amount;
    }
     getDetails():string  {
        return `account number : ${this.accountNum}
        accouner holder : ${this.holderId} 
        balance : ${this.accountBalance}
        type: ${this.accountType}`; 
    }
}// scope of private properties is within class

let account1= new BankAccount(23242526,121212,5000,"savings");  // call goes to constructor
console.log(account1.getDetails()); 
//console.log(account1.accountBalance); // direct access
console.log(account1.balance);  // get property
//console.log(account1.accountNum); // direct access
console.log(account1.accnumber); // get prperty
//account1.accountBalance=45000; // direct change
account1.balance=45000; // set property

account1.accnumber=87988798; // set property


let referece=account1;   // just a reference to existing object