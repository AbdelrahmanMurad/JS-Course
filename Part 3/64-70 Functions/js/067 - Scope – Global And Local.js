/*
  Scope
  - Global And Local Scope
*/

var a = 1;
let b = 2;

function showText() {
  var a = 10;
  let b = 20;
  console.log(`Function - From Local ${a}`);//10
  console.log(`Function - From Local ${b}`);//20
  // var a = 10;
  // let b = 20;
  // Error
}

console.log(`From Global ${a}`);//1
console.log(`From Global ${b}`);//2

showText();
console.log("-----------------------------------------");
