/*
  Conditional (Ternary) Operator 
  if المختصرة
*/

let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

/*
Condition ? If True : If False
*/

//type 1
theGender === "Male" ? console.log("Mr") : console.log("Mrs");
//type 2
let result = theGender === "Male" ? "Mr" : "Mrs"; //store it in result attribute
document.write(result); //console.log(result);
//type 3
console.log(theGender === "Male" ? "Mr" : "Mrs");
//type 4
console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

//! normal if
if (theAge < 20) {
  console.log("smaller than 20");
} else if (theAge > 20 && theAge < 60) {
  console.log("20 to 60");
} else if (theAge > 60) {
  console.log("Larger the 60");
} else {
  console.log("Unknown");
}

//! conditional if with nested if => Condition ? If True : If False (else if)
theAge < 20 //if
  ? console.log("smaller than 20")
  : theAge > 20 && theAge < 60 //else if
  ? console.log("20 to 60")
  : theAge > 60 //else if
  ? console.log("Larger than 60")
  : console.log("Unknown");//else

  console.log("----------------------------------");
