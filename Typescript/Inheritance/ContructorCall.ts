class Animal{
    a:string
    constructor(){
        console.log("***in Animal constructor***");       
    }
    eat(){
        console.log("Animal eats");       
    }
}
class Tiger extends Animal{
    b:string
    constructor(){
        super();  // explicit
        console.log("***in Tiger constructor***");     
    }
    eat(){  // inherited overriden method
        console.log("Tiger eats other small animals");     
    }
}
class Sheep extends Animal{
    eat(){
        console.log("Horse eats grass");
    }
}

let animal : Animal;
animal=new Tiger();  // call goes to super class constr then subclas constr
animal.eat(); 


