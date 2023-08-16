// set always unique values
// duplicates get override
let numSet = new Set();
numSet.add(45);
numSet.add(15);
numSet.add(45);
numSet.add(457);
numSet.add(15);
numSet.add(100);
console.log(numSet);
console.log(numSet.delete(123));
console.log(numSet);
let obj = numSet.entries();
console.log(obj);
console.log(numSet.has(15));
