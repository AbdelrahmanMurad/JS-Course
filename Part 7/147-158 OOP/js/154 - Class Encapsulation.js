/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

class User {
  // Private Property
  #e;
  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    this.#e = eSalary;
  }
  getSalary() {
    return parseInt(this.#e);
  }
}

class Admin extends User {
  constructor(i, u, e, number) {
    super(i, u, e);
    this.n = number;
  }
}

let userOne = new User(100, "Elzero", "5000 Gneh");
let admin = new Admin(200, "a", 23, 12);
console.log(userOne.u);
console.log(userOne.getSalary() * 0.3);
console.log(admin.u);
console.log(admin.i);
console.log(admin.e);//undefind - cant access to private variable
console.log(Admin.e);//undefind - cant access to private variable
console.log(User.e);//undefind - cant access to private variable
console.log(admin.getSalary());//23
console.log(admin.n);