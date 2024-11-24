// TODO: Q1
// Add Variables Here
const numOne = 10;
const numTwo = 20;
// Ouput
console.log(numOne + "" + numTwo); // Normal Concatenate => 1020 "string"
console.log(typeof (numOne + "" + numTwo)); // Normal Concatenate => String
console.log(`${numOne}${numTwo}`); // Template Literals Way => 1020
console.log(typeof `${numOne}${numTwo}`); // Template Literals Way => String

console.log(numTwo + "\n" + numOne);
/*
  Normal Concatenate
  20
  10
*/

// console.log(`${numTwo}\n${numOne}`); or
console.log(`${numTwo}
${numOne}`);
/*
  Template Literals Way
  20
  10
*/

// TODO: Q2
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
//! The answer is an HTML code "<div id="elzero">object</div>"

// TODO: Q3
console.log(
  '`I\'m In\n\\\\\nLove \\\\ """ \'\'\'\n++ With ++\n\\"""\\"""\n""JavaScript""``'
);

// TODO: Q4
let a = 21;
let b = 20;

// console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}`); // _21_2021_2021_2021_20_

//* second solution

let k = 21;
let l = 20;
let numberFour = Math.ceil(a / b) + !false + true; // ceil(21/20)=2, !false = true = 1, 2+1+1=4.

console.log("_" + `${k}_${l}`.repeat(numberFour) + "_");
// repeat method will repeat the string between backtick `` 4 times "input".
// this way just for ES6

/*The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.*/
