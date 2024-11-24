/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let g = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(g.charAt(2).toUpperCase() + g.slice(3, 6)); // Zero

// 8 H
console.log(g.substr(-4, 1).toUpperCase().repeat(8)); // HHHHHHHH
console.log(g.slice(-4, -3).toUpperCase().repeat(8)); // HHHHHHHH
console.log(g.substring(13, 14).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(g.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${g.substr(0, 6)} ${g.substr(-6)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
  g.charAt(0).toLowerCase() +
    g.substring(1, g.length - 1).toUpperCase() +
    g.charAt(g.length - 1).toLowerCase()
); // eLZERO WEB SCHOOl


