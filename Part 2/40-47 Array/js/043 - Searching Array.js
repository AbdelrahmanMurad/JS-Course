/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

let _friends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];
console.log(_friends);

//indexOf(Search Element, From Index [Opt])
console.log("%cindexOf()", "color:blue;");
console.log(_friends.indexOf("Ahmed")); //0
console.log(_friends.indexOf("Ahmed", 2)); //4

//lastIndexOf(Search Element, From Index [Opt])
console.log("%clastIndexOf()", "color:blue;");
console.log(_friends.lastIndexOf("Ahmed")); //4
console.log(_friends.lastIndexOf("Ahmed", -2)); //0
/*
                                                ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"]
console.log(_friends.lastIndexOf("Ahmed", -2));     -6         -4        -3       -2     -1
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
اذا ما فهمت انزل تحت اخر اسطر
*/

//includes(valueToFind, fromIndex [Opt]) [ES7]
console.log("%cincludes()", "color:blue;");
console.log(_friends.includes("Ahmed")); //true
console.log(_friends.includes("Ahmed", 2)); //true

if (_friends.lastIndexOf("Osama") === -1) {
  console.log("Not Found");
}

console.log(_friends.indexOf("Osama")); //-1
console.log(_friends.lastIndexOf("Osama")); //-1

console.log("-----------------------------");




/* //للتوضيح اكثر
let _friends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed", "Osama"];
//                  0         1         2       3       4       5
console.log(_friends.indexOf("Ahmed")); //0
console.log(_friends.indexOf("Ahmed", 0)); //0
console.log(_friends.indexOf("Ahmed", 1)); //4
console.log(_friends.indexOf("Ahmed", 2)); //4
console.log(_friends.indexOf("Ahmed", 3)); //4
console.log(_friends.indexOf("Ahmed", 4)); //4
console.log(_friends.indexOf("Ahmed", 5)); //-1
console.log("---");
console.log(_friends.lastIndexOf("Ahmed")); //4
console.log(_friends.lastIndexOf("Ahmed", 0)); //0
console.log(_friends.lastIndexOf("Ahmed", 1)); //0
console.log(_friends.lastIndexOf("Ahmed", 2)); //0
console.log(_friends.lastIndexOf("Ahmed", 3)); //0
console.log(_friends.lastIndexOf("Ahmed", 4)); //4
console.log(_friends.lastIndexOf("Ahmed", 5)); //4
console.log("------------------------------------");
// let _friends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed","Osama"];
//                    -6        -5        -4      -3      -2      -1
//                     0         1         2       3       4       5
console.log(_friends.indexOf("Ahmed", -1)); //-1
console.log(_friends.indexOf("Ahmed", -2)); //4
console.log(_friends.indexOf("Ahmed", -3)); //4
console.log(_friends.indexOf("Ahmed", -4)); //4
console.log(_friends.indexOf("Ahmed", -5)); //4
console.log(_friends.indexOf("Ahmed", -6)); //0
console.log("---");
// let _friends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed","Osama"];
//                    -6        -5        -4      -3      -2      -1
//                     0         1         2       3       4       5
console.log(_friends.lastIndexOf("Ahmed", -1)); //4
console.log(_friends.lastIndexOf("Ahmed", -2)); //4
console.log(_friends.lastIndexOf("Ahmed", -3)); //0
console.log(_friends.lastIndexOf("Ahmed", -4)); //0
console.log(_friends.lastIndexOf("Ahmed", -5)); //0
console.log(_friends.lastIndexOf("Ahmed", -6)); //0
*/