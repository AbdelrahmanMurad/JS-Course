// TODO: Q2
document.write("<h1>Elzero</h1>");
// document.querySelector("h1").style.color = "blue";
// document.querySelector("h1").style.fontSize = "80px";
// document.querySelector("h1").style.fontWeight = "bold";
// document.querySelector("h1").style.textAlign = "center";
// document.querySelector("h1").style.fontFamily = "Arial";

//* second solution

document.querySelector("h1").style.cssText =
  " color: blue; font-size: 80px; font-weight: bold; \
  text-align: center; font-family: Arial;";

// TODO: Q3
console.log(
  "%cElzero %cWeb %cSchool",
  "color: red; font-size: 40px;",
  "color: green; font-weight: bold; font-size: 40px",
  "color: white; background-color: blue; font-size: 40px"
);

// TODO: Q4
console.group("Group 1");
console.log("Message One");
console.log("Message Two");

console.group("Child Group");
console.log("Message One");
console.log("Message Two");

console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");

console.groupEnd("Grand Child Group");
console.groupEnd("Child Group");
console.groupEnd("Group 1");

console.group("Group 2");
console.log("Message One");
console.log("Message Two");

// TODO: Q5
console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);

// TODO: Q6
// console.log("Iam In Console");
// document.write("Iam In Page");
//* second solution
/*
console.log("Iam In Console");
document.write("Iam In Page");
*/
