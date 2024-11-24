/*
  Logical Or => ||
  -- Null + Undefined + Any Falsy Value
  
  Nullish Coalescing Operator => ??
  -- Coalescing كوليسينج
  -- Null + Undefined
*/



//Boolean():  falsy valueتبين لنا ال
console.log(Boolean(100));//true
console.log(Boolean(-100));//true
//falsy value
console.log(Boolean(0));//false
console.log(Boolean(""));//false
console.log(Boolean(null));//false



//Example 

// let __price = 100;

//*undefined
// let __price; 

//*null
// let __price = null;

//*all of this is flasy value
// let __price = "";
// let __price = false
let __price = 0;

console.log(`The Price Is ${__price || 200}`); //200
console.log(`The Price Is ${__price ?? 200}`); //
//200 is بديل
// ||: It means => if Null or Undefined or Falsy Value => 200
// ??: It means => if Null or Undefined => 200

console.log("----------------------------------");