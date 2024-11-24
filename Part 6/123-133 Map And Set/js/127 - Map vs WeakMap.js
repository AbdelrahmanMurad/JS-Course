/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

let mapUser = { theName: "Elzero" };

let myMap = new Map();

myMap.set(mapUser, "Object Value");

mapUser = null; // Override The Reference

console.log(myMap);
//
console.log("#".repeat(20));
//
let weakMapUser = { theName: "Elzero" };

let myWeakMap = new WeakMap();

myWeakMap.set(weakMapUser, "Object Value");

weakMapUser = null; // Override The Reference

console.log(myWeakMap);//المفترض ان يتم حذفها 
// weakMap,weakSet نستخدم  "garbage collector" لاي شيئ او ملهوش مؤشر او ما عليه وصول تشيله الذاكرة  remove اذا عندما نريد ان نعمل
