class Father{
    dream(){
        return "Doctor";
    }
}
class Mother{
     dream(){
        return "Engineer";
     }
}
class Child extends Father //, Mother
{
    callDream(){
        this.dream(); // ambiguity
    }
}

interface FatherIntf{
    dream(); // 
}

interface MotherIntf{
    dream();
}

class Child2 implements FatherIntf,MotherIntf{
    dream() {
         return "I want to b lawyer"
    }
    
}