/*
  BOM [Browser Object Model] 
  هذا الدرس مهم جدا
  - setTimeout(Function, Timeout, Additional arg)
  معينة بعد وقت معين fnمناداة 
  - clearTimeout(Identifier)
  حيوقف الوقت
*/

// setTimeout(function () {
//   console.log("Msg");
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setTimeout(sayMsg, 3000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} Age Is : ${age}`);
// }

let btn = document.querySelector("button");

btn.onclick = function () {
  clearTimeout(counter);
};

function sayMsg(user, age) {
  console.log(`Iam Message For ${user} Age Is : ${age}`);
}

let counter = setTimeout(sayMsg, 3000, "Osama", 38);