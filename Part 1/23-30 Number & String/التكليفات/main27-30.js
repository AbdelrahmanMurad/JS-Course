//TODO: Q1
let userName = "Elzero";
console.log(userName.toLowerCase().charAt(0)); // e
// console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.toLowerCase().substring(0, 1)); // e
console.log(userName.toLowerCase().substring(-3, 1)); // e
// console.log(userName.toLowerCase().split("e")); // e
console.log(userName.slice(0, 1).toLowerCase().repeat(3)); // eee
console.log("--------------------------");

//TODO: Q2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.toLowerCase().includes(letterZ)); // True
console.log(word.toLowerCase().startsWith(letterE)); // True
console.log(word.toUpperCase().endsWith(letterO)); // True
