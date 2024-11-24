/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  وتخزنهم في متغيرات جديدة توزعهم متل ما بدكarrays,object,map...etcاخذ البياانات من ال
    - Destructuring Array
*/
// let myFriends2 = ["Ahmed", "Sayed", "Ali", "Maysa"];
// let [p, l, n, m] = myFriends2;
// console.log(p);
// console.log(l);
// console.log(n);
// console.log(m);
// this is Destructuring
let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

// [a, b, c,] = myFriends;
[a = "A"/*A will not be stored*/, b, c, d, e = "Osama"] = myFriends;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(myFriends[4]);
// this is Destructuring
let [/*Ahmed*/, y,/*Ali*/ , z] = myFriends;

console.log(y);
console.log(z);

// this is Destructuring