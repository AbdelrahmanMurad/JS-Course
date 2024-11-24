//! consoleمن الافضل العرض على ال
/*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
      its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/

console.log(this); // window
console.log(this === window); //true

myVar = 100;

console.log(window.myVar); //100
console.log(this.myVar); //100

function sayHello() {
  console.log(this);
  return this;
}
sayHello(); //window

console.log(sayHello() === window); //true

document.getElementById("cl").onclick = function () {
  console.log(this); //owner تعود على المالك
};

let user = {
  age: 38,
  ageInDays: function () {
    console.log(this);
    return this.age * 365;
  },
};

console.log(user.age);
console.log(user.ageInDays());
