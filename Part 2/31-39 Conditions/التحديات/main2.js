/*
  Switch Challenge
*/

let job = "Designer";
let salary = 0;

if (job === "Manager") {
  console.log((salary = 8000));
} else if (job === "IT" || job === "Support") {
  console.log((salary = 6000));
} else if (job === "Developer" || job === "Designer") {
  console.log((salary = 7000));
} else {
  console.log((salary = 4000));
}

switch (job) {
  case "Manager":
    console.log((salary = 8000));
    break;
  case "Support":
  case "IT":
    console.log((salary = 6000));
    break;
  case "Designer":
  case "Developer":
    console.log((salary = 7000));
    break;
  default:
    console.log((salary = 4000));
}

/*
  If Challenge
*/

let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}

if (holidays == 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays == 1 || holidays == 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays == 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays == 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else if (holidays == 5) {
  money = 0;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}
