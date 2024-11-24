/*
  Class
  - Static Properties And Methods
  to access the variable or method in a class from object, without accessing the class. 
  */

class User {
  // Instance (non-static) property
  countOne = 0;

  // Static properties
  static countTwo = 0;
  static count = 0; // Initialize static count

  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
    User.count++; // Increment the static count for each new instance
    User.countTwo++; // Increment the static countTwo for each new instance
  }

  // Static methods
  static sayHello() {
    return `Hello From Class`;
  }

  static countMembers() {
    return `${this.count} and ${User.countTwo} Members Created`;
  }
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Ahmed", 5000);
let userThree = new User(102, "Sayed", 5000);

console.log(userOne.u);
console.log(userTwo.u);

// Accessing non-static and static properties
console.log(userOne.countOne); // 0 (instance property)
console.log(User.countTwo); // 3 (static property)

// Accessing static method via class
console.log(User.sayHello());
console.log(User.countMembers()); // 3 and 0 Members Created