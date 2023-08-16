class Animal{
    a:string
    eat(){
        console.log("Animal eats");       
    }
}
class Tiger extends Animal{
    b:string
    eat(){  // inherited overriden method
        console.log("Tiger eats other small animals");     
    }
}
class Sheep extends Animal{
    eat(){
        console.log("Horse eats grass");
    }
}

// upcasting : casting subclass object to superclass
// superclass ref variable, object: subclass

let animal : Animal;

animal=new Animal();
animal.eat();  // Animal eat

animal=new Tiger();  // upcasting  // Tiger forget his own propeties
animal.eat();  // overriden version

let tg=<Tiger>animal;  // downcasting   // Tiger remembers his own properties as well

animal=new Sheep();
animal.eat(); // overriden version







let tiger=new Tiger();
callEat(tiger);
let sheep=new Sheep();
callEat(sheep);

function callEat(anim:Animal){
    anim.eat();  // difft versions of eat must be called depends on object
}