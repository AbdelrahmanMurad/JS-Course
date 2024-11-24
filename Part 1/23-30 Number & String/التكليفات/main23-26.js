//TODO: Q1
console.log(100000); // 100000
console.log(10_00_00); // 100000
console.log(1e5); // 100000
console.log(10 * 10 * 10 * 10 * 10); // 100000
console.log(10 ** 5); // 100000
console.log(1000 * 100); // 100000
console.log(100000.0); // 100000
console.log(parseInt("100000 Murad")); // 100000
console.log(parseInt("100000.2321")); // 100000
console.log(+"100000"); // 100000
console.log(Math.round(100000.423)); // 100000
console.log(Math.ceil(99999.2)); // 100000
console.log(Math.max(100000, 99999, 123, 34)); // 100000
console.log(Math.min(100000, 10000000, 2300000, 434334)); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Math.trunc(100000.231)); // 100000
console.log("--------------------------");

//TODO: Q2
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER * -1); // 9007199254740991
console.log("--------------------------");

//TODO: Q3
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16
console.log("--------------------------");

//TODO: Q4
let myVar = "100.56789 Views";

console.log(parseInt(myVar), typeof parseInt(myVar)); // 100
console.log(
  +parseFloat(myVar).toFixed(2),
  typeof +parseFloat(myVar).toFixed(2)
); // 100.57
/*
console.log(Math.trunc(parseFloat(myVar))); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57
*/
console.log("--------------------------");

//TODO: Q5
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2
// console.log(Number.isInteger(num) + true); // 2
console.log("--------------------------");

//TODO: Q6
let flt = 10.4;

console.log(Number.parseInt(flt)); // 10
console.log(+flt.toFixed(0)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.ceil(--flt)); // 10
console.log("--------------------------");

//TODO: Q7
// Math.random() returns a number between 0 and 1
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
console.log("--------------------------");
console.log("--------------------------");

