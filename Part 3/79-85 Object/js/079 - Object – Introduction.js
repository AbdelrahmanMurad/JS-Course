/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/

let user = {
  // Properties
  name: "Osama",
  age: 38,
  // Methods
  sayHello: function () {
    return `Hello`;
  },
};

console.log(user.name);
console.log(user.age);
console.log(user.sayHello());
