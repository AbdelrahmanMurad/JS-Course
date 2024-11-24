/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/
//Dynamic Property Name
let myVar = "country";

let user = {
  //valid identififer 
  name: "Osama",
  country: "Egypt",
  //not  valid identififer
  "bestFriendName": "Mohammed",
  // لو عملت حفظ او فورمات حيتم حذف علامات التنصيص 
};

console.log(user.name); // => Osama
console.log(user["name"]);// => Osama
console.log(user.country); // user.country => Egypt
console.log(user.myVar); // not same as user.country, we need to use the bracket notation => undefind
console.log(user[myVar]); // same as user.country => Egypt
console.log(user["bestFriendName"]); // => Mohammed