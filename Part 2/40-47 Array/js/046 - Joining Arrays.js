/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator)
*/

let _myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = _myFriends.concat(myNewFriends, schoolFriends,"Gameel", [1, 2]);

console.log(allFriends);

console.log(allFriends.join());//default => (,) => display string with comma (,)
console.log(allFriends.join(""));//فش علامات => display string without any signal
console.log(allFriends.join(" @ ")); // display string with " @ " 
console.log(allFriends.join(" | "));// display string with " | "
console.log(allFriends.join("|").toUpperCase());
