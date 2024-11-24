/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

// <---One--->
++zero;
--counter;
my.reverse().splice(--zero, counter++);
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];
// <---One--->

// <---Two--->
console.log(my.slice(++zero, counter)); // ["Elham", "Mazero"]
// <---Two--->

// <---Three--->
console.log(
  my.slice(zero, counter)[--zero].slice(zero++, counter - zero) +
    my.slice(zero, counter)[zero++].slice(zero--)
); // "Elzero"
// <---Three--->

// <---Four--->
console.log(my[++zero][++counter] + my[zero--][++counter].toUpperCase()); // "rO"
// <---Four--->
