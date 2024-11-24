// TODO: Q1
let num = 110;

if (num < 10) {
  console.log("00" + num);
} else if (num > 10 && num < 100) {
  console.log("0" + num);
} else {
  console.log(num);
}

// conditional if
num < 10
  ? console.log("00" + num)
  : num > 10 && num < 100
  ? console.log("0" + num)
  : console.log(num);
console.log("--------------------------------------");

// TODO: Q2
let _num1 = 9;
let str = "9";
let str2 = "20";

if (_num1 == str) {
  console.log("{_num1} Is The Same Value As {str}");
} else if (_num1 == str && typeof _num1 != typeof str) {
  console.log("{_num1} Is The Same Value As {str} But Not The Same Type");
} else if (_num1 !== str2) {
  console.log("{_num1} Is Not The Same Value Or The Same Type As {str2}");
} else if (typeof str == typeof str2 && str != str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
} else {
  console.log("ERROR");
}

// conditional if
_num1 == str
  ? console.log("{_num1} Is The Same Value As {str}")
  : _num1 == str && typeof _num1 != typeof str
  ? console.log("{_num1} Is The Same Value As {str} But Not The Same Type")
  : _num1 !== str2
  ? console.log("{_num1} Is Not The Same Value Or The Same Type As {str2}")
  : typeof str == typeof str2 && str != str2
  ? console.log("{str} Is The Same Type As {str2} But Not The Same Value")
  : console.log("ERROR");
console.log("--------------------------------------");

// TODO: Q3
let n1 = 10;
let n2 = 30;
let n3 = "30";

n3 > n1 && typeof n3 != typeof n1
  ? console.log(
      "30 Is Larger Than 10 And Type string Not The Same Type As number"
    )
  : n3 > n1 && n3 == n2 && typeof n3 != typeof n2
  ? console.log(
      "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
    )
  : n3 !== n1 && typeof n3 != typeof n1
  ? console.log(
      "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
    )
  : console.log("error");
console.log("--------------------------------------");

// TODO: Q4
// Edit What You Want Here

let number1 = 10;
let number2 = 10;
let number3 = "10";
let number4 = 20;
/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (number1 == number2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (number1 == number2 && number1 < number4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (number1 == number2 && number1 == number3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (number1 + number2 == number4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (number1 + number3 !== number4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (number1 + number2 + number3 !== number4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (number4 - (number1 + number3) + number2 !== 21) {
  console.log("True");
} else {
  console.log("False");
}
console.log("--------------------------------------");
console.log("--------------------------------------");
