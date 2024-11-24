//TODO:Q1
function sayHello(theName = "unkown", theGender = "unkown") {
  theGender = theGender.toLowerCase();
  if (theGender == "male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender == "female") {
    console.log(`Hello Miss ${theName}`);
  } else console.log(`Hello ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Osama", "male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Eman", "female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
console.log("###".repeat(7));

//TODO:Q2
function calculate(
  firstNum,
  secondNum = "Second Number Not Found",
  operation = "add"
) {
  switch (operation) {
    case "add":
      return typeof (firstNum + secondNum) === "string"
        ? "Second Number Not Found"
        : firstNum + secondNum;
    case "subtract":
      return firstNum - secondNum;
    case "multiply":
      return firstNum * secondNum;
  }
}

// Needed Output
console.log(calculate(20)); // Second Number Not Found
console.log(calculate(20, 30)); // 50
console.log(calculate(20, 30, "add")); // 50
console.log(calculate(20, 30, "subtract")); // -10
console.log(calculate(20, 30, "multiply")); // 600
console.log("###".repeat(7));

//TODO:Q3
function ageInTime(theAge) {
  let months, weeks, days, hours, minutes, seconds;
  if (theAge > 10 && theAge < 100) {
    months = theAge * 12;
    weeks = months * 4;
    days = weeks * 7;
    hours = days * 24;
    minutes = hours * 60;
    seconds = minutes * 60;
    return `\tAge = ${theAge} years
      Months = ${months} month
      Weeks = ${weeks} week
      Days = ${days} day
      Hours = ${hours} hour
      Minutes = ${minutes} minute
      Seconds = ${seconds} second`;
  } else {
    return `"${theAge}" Age Out Of Range`;
  }
}
// Needed Output
console.log(ageInTime(110)); // Age Out Of Range
console.log(ageInTime(38)); // Months Example => 456 Months
console.log("###".repeat(7));

//TODO:Q4
function showDetails(a, b, c) {
  let str, num, bool;
  typeof a === "string"
    ? (str = a)
    : typeof b === "string"
    ? (str = b)
    : (str = c);

  typeof a === "number"
    ? (num = a)
    : typeof b === "number"
    ? (num = b)
    : (num = c);

  typeof a === "boolean"
    ? (bool = a)
    : typeof b === "boolean"
    ? (bool = b)
    : (bool = c);

  return `Hello ${str}, Your Age Is ${num}, You ${
    bool ? `Are` : `Are Not`
  } Available For Hire`;
}

console.log(showDetails("Osama", 38, true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(showDetails(38, "Osama", true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(showDetails(true, 38, "Osama")); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(showDetails(false, "Osama", 38)); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
console.log("###".repeat(7));

/*
//TODO:Q5
function createSelectBox(startYear, endYear) {
  document.write("<select>");
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write("</select>");
}
createSelectBox(2000, 2021);
// outputالناتج في الصفحة وليس في ال
console.log("###".repeat(7));
*/

//TODO:Q6
function multiply(...args) {
  let answer = 1;
  for (let arg of args) {
    if (typeof arg === "number") {
      answer *= Math.trunc(arg);
    }
  }
  return answer;
}
/*
  for (let arg of args) => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  => https://www.w3schools.com/js/js_loop_forof.asp
*/
console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000
// console.log("###".repeat(7));
