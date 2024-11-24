/*
  Class Inheritance
*/

// Parent Class (Base class)
class User {
  // Constructor to initialize id and username
  constructor(id, username) {
    this.id = id; // Assign id to property 'id'
    this.username = username; // Assign username to property 'username'
  }

  // Method to return a greeting message
  sayHello() {
    return `Hello ${this.username}`; // Access username and return greeting
  }
}

// Derived Class (Subclass) that extends User
class Admin extends User {
  // Constructor to initialize id, username, and permissions
  constructor(id, username, permissions) {
    // Call the parent class (User) constructor to initialize id and username
    super(id, username);
    this.permissions = permissions; // Assign permissions to property 'permissions'
  }
}

// Another Derived Class (Subclass) that extends Admin
class Superman extends Admin {
  // Constructor to initialize id, username, permissions, and ability
  constructor(id, username, permissions, ability) {
    // Call the parent class (Admin) constructor to initialize id, username, and permissions
    super(id, username, permissions);
    this.ability = ability; // Assign ability to property 'ability'
  }
}

// Create an instance of the User class
let userOne = new User(100, "Elzero");

// Create an instance of the Admin class, which is a subclass of User
let adminOne = new Admin(110, "Mahmoud", 1);

// Log the username of the user instance
console.log(userOne.u); // Output: Elzero

// Call the sayHello method from the User instance
console.log(userOne.sayHello()); // Output: Hello Elzero

console.log("####"); // Separator for output

// Log the id of the admin instance
console.log(adminOne.i); // Output: 110

// Log the username of the admin instance
console.log(adminOne.u); // Output: Mahmoud

// Log the permissions of the admin instance
console.log(adminOne.p); // Output: 1

// Call the sayHello method from the Admin instance (inherited from User class)
console.log(adminOne.sayHello()); // Output: Hello Mahmoud
