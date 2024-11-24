/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
      ![].
      !new Array() => we will take it later "constructor". 
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];
//                  0         1         2              3[0][1]
console.log(`Hello ${myFriends[0]}`); //Ahmed
console.log(`Hello ${myFriends[2]}`); //Sayed
console.log(`${myFriends[1][2]}`); //h "from mohamed"
console.log(`Hello ${myFriends[3][1]}`); //Ali
console.log(`${myFriends[3][1][2]}`); //i "from ali"

//update names
console.log(myFriends);
myFriends[1] = "Gamal";
console.log(myFriends);
myFriends[3] = "Sameh";
console.log(myFriends);
myFriends[3] = ["Abood", "Ameer"];
console.log(myFriends);

console.log(typeof myFriends); //object
/*
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
But, JavaScript arrays are best described as arrays.
*/
console.log(Array.isArray(myFriends)); //true

console.log("-----------------------------");
