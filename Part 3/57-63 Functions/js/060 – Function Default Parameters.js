/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

function sayHello(username = "Unknown", age = "Unknown") {
  //!old way
  /*
    //way_1
  if (age === undefined) {
    age = "Unknown";
  }
    //way_2
  age = age || "Unknown";
  */
  //!new way "ES"
  //Declare parameters then return
  return `Hello ${username} Your Age Is ${age}`;
}

console.log(sayHello());
console.log(sayHello("Murad"));
console.log(sayHello("Murad", "21"));
console.log("-----------------------------------");
