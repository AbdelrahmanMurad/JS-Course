/*
  Function
  - Return
      ?قيمة تم تخزينها في الميثود ولن يتم الطباعة
  - ASI:  Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting
*/

function sayHellooo(userName) {
  return `Hello ${userName}`;
  //we cant code anything after return.
  /*
!this code is wrong
  return 
  `Hello ${userName}`;*/
}

console.log(sayHellooo("Murad"));
let result = sayHellooo("Abood");
console.log(result);
//////////////////////////////////////////////
function calc(name1, name2) {
  return name1 + name2;
}

let result2 = calc(31, 2);
console.log(result2 + 1);

//////////////////////////////////////////////
function generate(start, end) {
  for (let i = start; i <= end; i++) {
    if (i === 15) {
      return `Interrupting`; //same as break; "stop execution" 
    }
    console.log(i);
  }
}

generate(10, 20);
console.log("-----------------------------------");


/*
ASI:  Automatic Semicolon Insertion [No Line Terminator Allowed]

    First, what is this Automatic Semicolon Insertion?
    The ASI is one of JavaScript’s syntactic features. 
    Without a doubt, it is probably one of JavaScript’s most controversial. 
    Automatic Semicolon Insertion is something like a subprogram or process automatically running on a background 
    when JavaScript parser parses your code.

    What this subprogram, or process, does is it inserts semicolons where it is necessary when you run your code. 
    In JavaScript, there are situations where semicolons are required. Otherwise, your code could break. 
    The job of Automatic Semicolon Insertion is to make sure your code follows these rules. 
    If some required semicolon is missing ASI will add it.
*/