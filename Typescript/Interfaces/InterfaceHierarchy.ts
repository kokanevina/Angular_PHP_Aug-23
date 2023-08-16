interface A{
    test():string;  // inh p
}
interface B extends A{
    demo():number;  // own p
}

class MyDemo implements B{
    demo(): number {
        return 0;
    }
    test(): string {
        return "";
    }
}

interface StackIntf{
    push(ele:number):void;
    pop():number;
    display():void
}
interface QueueIntf{
    insert(ele:number):void;
    delete():number;
    display():void
}
//multiple inheritance supported if same properties declared are identical
interface CollectIntf extends StackIntf,QueueIntf{

}

class MyTest implements CollectIntf{
    push(ele: number): void {
        throw new Error("Method not implemented.");
    }
    pop(): number {
        throw new Error("Method not implemented.");
    }
    display(): void {
        throw new Error("Method not implemented.");
    }
    insert(ele: number): void {
        throw new Error("Method not implemented.");
    }
    delete(): number {
        throw new Error("Method not implemented.");
    }

}