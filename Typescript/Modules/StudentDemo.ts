import { Student, changeCollege, collegeName } from "./MyModule/Student";
import Department from './MyModule/Student';  // use original name/ alias, {} not need
let student=new Student();

//collegeName="SIT";
console.log(collegeName);
changeCollege("SIT");
console.log(collegeName);

let dept1=new Department();


