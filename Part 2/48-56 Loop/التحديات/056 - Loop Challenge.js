/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];
let adminsNumber = 0;
let employeesNumber = 0;

document.write(`<div>We Have X Admins</div>`);
//admins number
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  } else adminsNumber++;
}
document.write(`<div>We Have ${adminsNumber} Admins</div>`); //number of teams = number of admins
document.write(`<hr>`);

document.write(`<div>`);
  for (let i = 0; i < adminsNumber; i++) {
      document.write(`The Admin For Team ${i + +true} Is ${myAdmins[i]}`);
      document.write(`<h3>Team Members:</h3>`);
    for (let j = 0; j < myEmployees.length; j++) {
      if (myAdmins[i].charAt(0) === myEmployees[j].charAt(0)) {
        document.write(`<p>- ${++employeesNumber} ${myEmployees[j]}</p>`);
      }
    }
    employeesNumber = 0;
    document.write(`<hr>`);
  }

document.write(`</div>`);