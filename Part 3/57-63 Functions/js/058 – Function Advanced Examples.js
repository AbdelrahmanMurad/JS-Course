/*
  Function Advanced Examples
*/

function sayHelloo(userName, age) {
  if (age < 20) {
    console.log(`${userName}, App is Not Suitable For You`);
  } else {
    console.log(`Hello ${userName} Your Age is ${age}`);
  }
}

sayHelloo("Osama", 38);
sayHelloo("Sayed", 40);
sayHelloo("Ali", 18);
console.log(); //نزل سطر

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}

generateYears(1982, 2021, 2020); //2020 will not written
console.log("-----------------------------------");