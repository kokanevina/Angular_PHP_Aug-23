
class BankAccount{
    private accountNum:number;
    private holderId:number;
    private accountBalance:number;
    private accountType:string;
    //public
     static bankName:string;
    constructor(accnum=0,holderId=0,balance=0,accountType="current"){
        this.accountNum=accnum;
        this.holderId=holderId;
        this.accountBalance=balance;
        this.accountType=accountType;
    }
    static{
        console.log("***in static block****");
        this.bankName="Standard Chartard";
    }
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
    get holder() {
        return this.holderId;
     }
    set holder(holderId:number) {
       this.holderId=holderId;
    }
    get atype() {
        return this.accountType;
    }
    set atype(accountType:string) {
       this.accountType=accountType;
    }
    deposit(amount:number){
        this.accountBalance=this.accountBalance+amount;
    }
     getDetails():string  {
        return `account number : ${this.accountNum}
        accouner holder : ${this.holderId} 
        balance : ${this.accountBalance}
        type: ${this.accountType}`; 
    }

    getBankName(){
        // instance method can access static variable? : yes (classname.variablename)
        return BankAccount.bankName;
    }
    static getBank(){
        // static method can access static variable? yes (classname.variablename) / (this.bankName)
        return BankAccount.bankName;
    }

}// scope of private properties is within class


console.log(BankAccount.bankName);  // no need of object // its a class property
console.log(BankAccount.bankName);
let account1=new BankAccount(45454545,444444,23000,"savings");
let account2=new BankAccount(34343434,333333,23000,"savings");
account1.atype="current";
console.log("Bank Name : "+account1.getBankName());
BankAccount.bankName="Standard C";
console.log(BankAccount.bankName);
console.log("Bank Name : "+account1.getBankName());
console.log("Bank Name : "+account2.getBankName());
console.log(account1.atype);
console.log(account2.atype);
console.log(BankAccount.getBank());
