/*
  Constructor Function
  - Update Properties
  - Built In Constructors
*/

class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
  }
  updateName(newName) {
    this.u = newName;
  }
}

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.u);
userOne.updateName("Osama");
console.log(userOne.u);//empty

let strOne = "Elzero";//Type: string
let strTwo = new String("Elzero");//Type: object

console.log(typeof strOne);
console.log(typeof strTwo);

console.log(strOne instanceof String); //ما استخدم الكونستراكتور
console.log(strTwo instanceof String); //استخدم الكونس

console.log(strOne.constructor === String); //استخدم الكونس
console.log(strTwo.constructor === String); //استخدم الكونس