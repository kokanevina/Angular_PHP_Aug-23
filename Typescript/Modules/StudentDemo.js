"use strict";
exports.__esModule = true;
var Student_1 = require("./Student");
var student = new Student_1.Student();
//collegeName="SIT";
console.log(Student_1.collegeName);
(0, Student_1.changeCollege)("SIT");
console.log(Student_1.collegeName);
