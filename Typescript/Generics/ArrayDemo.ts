
let array=new Array();   // Stack
array.push("hi");
array.push(78000);

let salaryArray=new Array<number>();
salaryArray.push(56000);
//salaryArray.push(new Number(67000));
//salaryArray.push("hi");
salaryArray.push(78000,89000,12000,34000,78000)
//salaryArray.pop();

let nameArray=new Array<string>();
nameArray.push("hariom");
nameArray.push("poonam","kriti","kumar","roza","mani","harish","poonam");
//nameArray.pop();

console.log(salaryArray);
console.log(nameArray);

// use further array functions which u learned in javascript

class Book{
    bookId:number;
    bookName:string;
    bookPrice:number;

    constructor(bookId=0,bookName="",bookPrice=0){
        this.bookId=bookId;
        this.bookName=bookName;
        this.bookPrice=bookPrice;
    }

}

let book1=new Book(45,"Learn Java",678.00)
let book2=new Book(35,"Learn Python in Easy way",578.40)
let book3=new Book(47,"Basics of Java",670.00)
let book4=new Book(33,"Web Basics",678.00)
let book5=new Book(33,"Advanced Java in Easy way",678.00);

let bookArray=new Array<Book>();
bookArray.push(book1,book2,book3,book4)

// 1. Display array using forEach
//2. Filter Java Books (Learn Java, Basics of Java, Advanced Java in Easy way)
//3. Increment price of every book by 100 but save these books in new array
// 4. Make sum of prices of all books

// pop always removed last element
// push always adds at last

// nameArray[2]="Vina";  // adding via index
// splice : can remove / replace element from inbetween the array 