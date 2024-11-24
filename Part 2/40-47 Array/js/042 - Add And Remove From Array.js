/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/

let friends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
console.log(friends);

// unshift("", "") Add Element To The First
console.log("%c unshift()", "color:blue;"); // فاصل
friends.unshift("Osama", "Nabil");
console.log(friends);

// push("", "") Add Element To The End
console.log("%c push()", "color:blue;");
friends.push("Samah", "Eman");
console.log(friends);

// shift() Remove First Element From Array
console.log("%c shift()", "color:blue;");
let first = friends.shift();
console.log(friends);
console.log(`First Name Is ${first}`);//تم تخزين الاسم الاول قبل الحذف

// pop() Remove Last Element From Array
console.log("%c pop()", "color:blue;");
let last = friends.pop();
console.log(friends);
console.log(`Last Name Is ${last}`);//تم تخزين الاسم الاول قبل الحذف

console.log("-----------------------------");
