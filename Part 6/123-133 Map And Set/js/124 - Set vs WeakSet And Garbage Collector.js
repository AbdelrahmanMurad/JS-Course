/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
garbage collection:clean objects dont have referece. حذف البيانات اللي ما بقدر اصلها او ما الها مؤشر
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet);

// Size
console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// Values + Keys [Alias For Values]
let iterator = mySet.keys();

console.log(iterator.next().value); //1
console.log(iterator.next().value); //2
console.log(iterator.next().value); //3
console.log(iterator.next().value); //A
console.log(iterator.next()); //undefind

// forEach "higher order fn"
//logاطبعلي اياه في ال mySet موجود في ال el كل
mySet.forEach((el) => console.log(el));

console.log("#".repeat(20));
/////////////////////////////////////////////
// Type Of Data

let myws = new WeakSet([{ A: 1, B: 2 }]);
// let myWeakSet = new WeakSet([1, 1, 1, 2, 3, "A", "A"]);//Error: TypeError: Invalid value used in weak set
console.log(myws);
// Size: cant use it
// Values + Keys [Alias For Values]: cant use it
// forEach "higher order fn": cant use it

// !search:  WeakSet use cases
