/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
!  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
  */

let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set([1, 1, 1, 2, 3]);/*or  let myUniqueData = new Set(myData);*/
//? add()
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
let myUniqueData = new Set();

myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A");

//? has()
console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);

console.log(myData);
console.log(myUniqueData);

//? size()
console.log(myUniqueData.size);

console.log(myData[0]);
console.log(myUniqueData[0]);//! undefined

//? delete()
// myUniqueData.delete(2);
console.log(myUniqueData.delete(2));//! true
// console.log(myUniqueData.delete(20));//! false

console.log(myUniqueData);//! Set(3) { 1, 3, 'A' }
console.log(myUniqueData.size);//! 3

//? clear()
myUniqueData.clear();

console.log(myUniqueData);//! Set(0) {}
console.log(myUniqueData.size);//! 0
