
const a=78;

class Circle{
    readonly radius:number;  //non shared constants
    static readonly pie=3.142;  // shared constants
    constructor(radius=0){
        this.radius=radius;
    }
    area(){
        return Circle.pie*this.radius*this.radius
    }
}

//Circle.pie=3.14;

let circle1=new Circle(34);
console.log(circle1.radius);
console.log(circle1.area());
//circle1.radius=67;

let circle2=new Circle(22);
console.log(circle2.radius);
console.log(circle2.area());
//circle2.radius=12;
