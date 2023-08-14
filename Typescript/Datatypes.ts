var str;


let s1;
const s2=45;
 //s2=67;   //Cannot assign to 's2' because it is a constant.

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