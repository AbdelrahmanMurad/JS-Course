/*
  Function
  - Anonymous Function 
?        في متغير باسم Fnتخزين ال
?       العادية تسمح لنا بالاستدعاء اولا Fnمع العلم ان ال ،initialization قبل عمل  Fnونفعل ذلك لمنع استدعاء ال
  - Calling Named Function vs Anonymous Function
  - When to use ? we can use this situation when we need the function just one time. "for one action".
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

//1 store Anonymous Fn in variable.
let calculator = function (num1, num2) {
  return num1 + num2;
};

console.log(calculator(10, 20));

//2 Normal function.
function sayHello() {
  console.log("-- You have clicked the button \"Say Hello\" => Hello Osama");
}

document.getElementById("hello").onclick = sayHello;

//3 store Fn in document.
document.getElementById("show").onclick = function () {
  console.log("-- You have clicked the button \"Show\" => show");
};

//4 Fn inside setTimeout method.
setTimeout(function elzero() {
  console.log("Good");
}, 2000);

console.log("-----------------------------------------");
