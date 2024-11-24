/*
  Object
  - Nested Object And Trainings
*/

let available = true; //global scope

let user = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"], //array
  available: false,
  addresses: {
    //nested object from user object
    ksa: "Riyadh",
    egypt: {
      //nested object from adresses object from user object
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    // if (available === true) { صحيحة عشان سطر 6 موجود
    if (user.available === true) {
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills.join(" | "));
console.log(user.skills[2]); // Access With Index
console.log(user.addresses.ksa);
console.log(user.addresses.egypt); // => { one: 'Cairo', two: 'Giza' }
console.log(user.addresses.egypt.one);
console.log(user["addresses"].egypt.one); // Dot Notation with Bracket Notation
console.log(user["addresses"]["egypt"]);
console.log(user["addresses"]["egypt"]["one"]);

console.log(user.checkAv()); //function