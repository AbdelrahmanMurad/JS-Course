/*
  Number Methods
  - Two Dots To Call A Methods
  - toString()          //? output : string
  - toFixed()           //? output : string
  
  - parseInt()          //? output : integer
  - parseFloat()        //? output : float
  
  - isInteger() [ES6]   //? output : boolean
  - isNaN() [ES6]       //? output : boolean
*/

console.log((100).toString()); //100 string
console.log((100.1).toString()); //100.1 string
console.log((100.555555).toFixed(2)); //100.56 string

console.log(Number("100 Osama")); //NaN
console.log(+"100 Osama"); //NaN
console.log(parseInt("100 Osama")); //100
console.log(parseInt("100.500 Osama")); //100 because its integer
console.log(parseInt("Osama 100 Osama")); //NaN because it starts with a string
console.log(parseFloat("100.500 Osama")); //100.5

console.log(Number.isInteger("100"));//false
console.log(Number.isInteger(100.5));//false
console.log(Number.isInteger(100));//true

console.log(Number.isNaN("Osama" / 20));//true
console.log("--------------------------------------"); //seperate
