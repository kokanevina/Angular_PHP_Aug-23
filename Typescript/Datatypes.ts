var str;


let s1;
const s2=45;
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

let salary=78000;    //(annotation assigned according to value)
//salary="Hello";  //Type 'string' is not assignable to type 'number'

let empname:string      // primitive 
empname="harshit";
//empname=67899;

let companyName;   //any
companyName="Nesoft";  //string
companyName=456770;   //  number
companyName={     // object
    name:"neo",
    code:'456788'
}
// var and let diff
// var type variables are functional scoped variables
function test1(){
    for (var i=1,myName="Vina";i<=5;i++)  // declared i in for loop
        {
            console.log("inside for loop:"+i); 
            /* let bele=document.createElement("b");
            bele.textContent=i+"";
            document.body.append(bele); */
        }
     console.log("outside for loop:"+i);  // used if out of for loop  
     console.log("My name is :"+myName);
}
test1();
// let type variables are block scoped variables
function test2(){
    for (let i=1,myName="Vina";i<=5;i++)  // declared i in for loop
        {
            console.log("inside for loop:"+i); 
        } // scope of i and myName is ended here
    // console.log("outside for loop"+i);  // used if out of for loop  
   //  console.log("My name is :"+myName);
}
test2();