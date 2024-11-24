/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

let swappingCases = "elZERo";
// convert the capital letter to small and the small letter to capital.
let invertedNumbers = [1, -10, -20, 15, 100, -30];
// conver the positive number to negative and the negative number to positive.
let ignoreNumbers = "Elz123er4o";
// Ignore numbers



//First Example

let sw = swappingCases.split("").map(function (ele) {
  // we used split to make it array.

  // Condition ? True : False
  return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
}).join("");

console.log(sw);

//*Arrow Function Version


// let sw2 = swappingCases.split("").map((ele) => (ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase())).join("")
let sw2 = swappingCases.split("")
  .map(ele => ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()).join("")

console.log(sw2);
console.log("---");



//Second Example

let inv = invertedNumbers.map(function (ele) {
  // we didnt used split, because its an array.
  return -ele;
});

let inv2 = invertedNumbers.map(ele => -ele);
console.log(inv);
console.log(inv2);
console.log("---");



//Thired Example

let ign = ignoreNumbers.split("").map(function (ele) {
  // we used split to make it array.
  return isNaN(parseInt(ele)) ? ele : "";
})
  .join("");

let ign2 = ignoreNumbers.split("").map(ele => isNaN(parseInt(ele)) ? ele : "").join("");

console.log(ign);
console.log(ign2);

console.log("--------------------------------------------");
