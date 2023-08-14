var str;
var s1;
var s2 = 45;
//s2=67;   //Cannot assign to 's2' because it is a constant.
// difference
/*Dynamically Typed Language      Statically Typed Lang
      var b;                             int a; float b;  a="hello":error
      b="hi"; string
      b=90;  number                     let m=67 (number)
      b=98.67; number                   let id:string

      Javascript
       var xyz; let empId
*/
var salary = 78000; //(annotation assigned according to value)
//salary="Hello";  //Type 'string' is not assignable to type 'number'
var empname; // primitive 
empname = "harshit";
//empname=67899;
var companyName; //any
companyName = "Nesoft"; //string
companyName = 456770; //  number
companyName = {
    name: "neo",
    code: '456788'
};
// var and let diff
// var type variables are functional scoped variables
function test1() {
    for (var i = 1, myName = "Vina"; i <= 5; i++) // declared i in for loop
     {
        console.log("inside for loop:" + i);
    }
    console.log("outside for loop:" + i); // used if out of for loop  
    console.log("My name is :" + myName);
}
test1();
// let type variables are block scoped variables
function test2() {
    for (var i = 1, myName = "Vina"; i <= 5; i++) // declared i in for loop
     {
        console.log("inside for loop:" + i);
    } // scope of i and myName is ended here
    // console.log("outside for loop"+i);  // used if out of for loop  
    //  console.log("My name is :"+myName);
}
test2();
var city = "Rabale";
city = "Dadar";
var city = "Thane"; // redeclarations are allowed
var loc = "Sanpada";
loc = "turbhe";
//let loc="Ghansoli"; //Cannot redeclare block-scoped variable
var age = 78;
var gender;
gender = "female"; // string
console.log(typeof gender);
gender = 1; // number
console.log(typeof gender);
