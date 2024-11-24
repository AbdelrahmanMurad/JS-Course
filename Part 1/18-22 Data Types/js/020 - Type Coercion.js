/*
  Type Coercion "كوورجين" (Type Casting) اجبار: تحويل البيانات من نوع الى نوع 
  +
  -
  "" - 2
  false - true
*/

let a = "100";
let b = 20;
let c = true;

//Type Coercion: + - 
console.log(a + b); //10020
console.log(+a + b); //120
console.log(Number(a) + b); //120
console.log(a - b); //- its not a concat like + so the result is 80.
console.log(+a + b + c); //121
console.log(a + b + c); //10020true => convert true from bolean to string

console.log("" - 2); //-2
console.log(+""); //0
console.log(0 - 2); //-2

console.log(false - true); //0-1 = -1
console.log(+false - +true); //+(0-1) = -1

console.log("-----------------------"); //to make a separate.
