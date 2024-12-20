/*
  Constructor Function
  - New Syntax
*/

/*
First Syntax
function User(id, username, salary) {
                    instatiate تعريف
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
}
*/
//second syntax
class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
  }
}

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);

console.log(userOne instanceof User);
console.log(userOne.constructor === User);