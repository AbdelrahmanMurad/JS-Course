/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.group("Challenge 1");
console.log("First : ", ++a + +b++ + +c++ - +a++);
console.log("Second : ", ++a + -b + +c++ - -a++ + +a);
console.log("Third : ", --c + +b + --a * +b++ - +b * a + --a - +true);
console.groupEnd();
/*
  !First [++a] [+b++] [+c++] [+a++] [+] [-]
  ?[++a]
  - Value: 11
  - Explain: sum then store then print
  ?[+b++]
  - Value: 20 then 21
  - Explain: covert string to number, print then sum then store 
  ?[+c++]
  - Value: 80 then 81
  - Explain: covert string to number, print then sum then store 
  ?[+a++]
  - Value: 11 then 12
  - Explain: covert string to number, print then sum then store 
  ?[+] [-]
  - Explain: summation and subtraction arithmetic operation.
*
!Second [-b] [-a++] 
  ?[-b]
  - Value: -20
  - Explain: convarte to number and navigate it
  ?[-a++]
  - Value: -10 then 11
  - Explain:  convarte to number and navigate it
*
  !Third [--c] [+b] [--a] [+true]
  ?[--c]
  - Value: 79
  - Explain: c - 1
  ?[+b]
  - Value: 20
  - Explain:  convarte to number.
  ?[--a]
  - Value: 9
  - Explain:  a - 1
  ?[+true]
  - Value: 1
  - Explain:  convarte to number.
  */

/*          هذا شرح اخر انظر له غدا
  /*
  [++a] [+] [+b++] [+] [+c++] [-] [+a++]
  [++a]
  - Value: 11
  - Explain: pre - do the operator (addition) then print the value
  [+]
  - Explain: Addition Operator
  [+b++]
  - Value: 20
  -Explain: post - final value (21)
  [+]
  - Explain: Additoin Operator
  [+c++]
  - Value: 80
  - Explain: post - final value (81)
  [-]
  - Explain: Negation Operator
  [+a++]
  - Value: 11
  - Explain: post - final value (12)
*/

// ---------------------

/* 
  [++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]
  [++a]
  - Value: 13
  - Explain: pre
  [+]
  - Explain: Addition Operator
  [-b]
  - Value: -21
  - Explain: convert string into number and makes it negative
  [+]
  - Explain: Addition Operator
  [+c++]
  - Value: 81
  - Explain: post - final value (82)
  [-]
  - Explain: Negation Operator
  [-a++]
  - Value: -13
  - Explain: post - final value (14)
  [+]
  - Explain: Addition Operator
  [+a]
  - Value: 14
  - Explain: Clear Enough
*/

// ---------------------

/*  
  [--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*] [a] [+] [--a] [-] [+true]
  [--c]
  - Value: 81
  - Explain: pre - do the operator (minus) then print the value
  [+]
  - Explain: Addition Operator
  [+b]
  - Value: 21
  - Explain: unary operator (+) converts string to number and keep its positivity 
  [+]
  - Explain: Addition Operator
  [--a]
  - Value: 13
  - Explain: pre - do the operator (minus) then print the value
  [*]
  - Explain: Multiplication Operator
  [+b++]
  - Value: 21
  - Explain: post - print the value then make the operation - final value (22)
  [-]
  - Explain: Negation Operator
  [+b]
  - Value: 22
  - Explain: Clear Enough
  [*]
  - Explain: Multiplication Operator
  [a]
  - Value: 13
  [+]
  - Explain: Addition Operator
  [--a]
  - Value: 12
  - Explain: pre - make the operator (minus) then print the value
  [-]
  - Explain: Negation Operator
  [+true]
  - Value: 1
  - Explain: Clear Enough 
*/
  
/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice
console.group("Challenge 2");
console.log(-d * +e); // 2000
console.log(-(--d) + f + ++e * ++g); // 173
console.groupEnd();
