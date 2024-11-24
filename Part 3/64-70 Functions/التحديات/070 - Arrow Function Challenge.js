/* 
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

const names = (...allNames) =>
"String " + (() => {let answer = ""; for (let word of allNames) {answer += `[${word}], `;} return answer.slice(+false, answer.length - (true + true));})() + " => Done !";


console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// Another Solution With Higher Order Functions: -
/*
const names = (...all) =>
  "String " +
  all.reduce(
    (acc, cur, i) =>
      i != all.length - 1 ? `${acc}[${cur}], ` : `${acc}[${cur}] `,
    ""
  ) +
  "=> Done !";
*/

/* * ================================ * */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

// Arrow Function
let calc = (one, two, ...nums) => one + two + nums[+false][+true];

// Regular Syntax
/* 
function calc(one, two, ...nums) {
  return one + two + nums[+false][+true];
}
*/
console.log(calc(10, myNumbers[+false], myNumbers)); // 80