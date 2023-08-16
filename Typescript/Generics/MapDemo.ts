
// keys unique : if duplicate then override
// values can be duplicate
let myMap=new Map<number,string>();
myMap.set(3456,"Pune");
myMap.set(1111,"Solapur");
myMap.set(3456,"Mumbai");
myMap.set(4444,"Solapur");
myMap.set(5454,"Delhi");
myMap.set(6778,"Thane");
myMap.set(7887,"Thane");
console.log(myMap);
let keyArray=myMap.keys();
console.log(keyArray);
let valueArray=myMap.values();
console.log(valueArray);
// Employees living in which dfftt cities
let citySet=new Set<string>(valueArray);
console.log(citySet);

myMap.delete(7887);
let city=myMap.get(1111);
console.log(`employee 1111 is living in city ${city}`);

console.log(myMap);
let mapEntry=myMap.entries();
while(true){
    let nextEntry=mapEntry.next();
    if(nextEntry.done==true)
        break;
    console.log(nextEntry.value);   
}

