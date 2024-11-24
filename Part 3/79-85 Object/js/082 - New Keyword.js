/*
  Object
  - Create With New Keyword new Object();        -         initialization
*/
//old initialization for object
let userrr = {
  //variables
};

//new initialization for object
// let user = new Object({});
//or
let user = new Object({
  age: 20,
});

console.log(user);

user.age = 38;
user["country"] = "Egypt"; //add variable

user.sayHello = function () { //add method
  return `Hello`;
};

console.log(user);
console.log(user.age);
console.log(user.country);
console.log(user.sayHello());
