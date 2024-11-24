/*
  Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(parseInt(Math.min(a, b, c, d))); //d=2.4=>2

// Use Variables a + d One Time To Get The Needed Output
console.log(100e2 + d * 0); // 10000
console.log(Math.pow(a, Math.floor(d))); // 10000
console.log(Math.pow(a,parseInt(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Number(d.toFixed(0))); // 2

// Use Variables b + d To Get This Valus
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(Math.trunc(b) / Math.ceil(d))); // 67 => Number
console.log("-------------------------------------");