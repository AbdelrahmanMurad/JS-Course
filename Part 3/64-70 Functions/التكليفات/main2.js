//TODO:Q3
/*
function checker(zName) {
    return function (status) {
      return function (salary) {
        return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
      };
    };
  }


*/
//!NOTE: Currying function with arrow.
//https://medium.com/@harouny/currying-in-javascript-arrow-function-sequence-2a510441215a
let checker = (zName) => (statuss) => (salary) =>
  statuss === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
console.log("#".repeat(15));

//TODO:Q4
function specialMix(...data) {
  let sum = 0,
    allString = true;
  for (item of data) {
    if (!isNaN(parseInt(item))) {
      sum += parseInt(item);
      allString = false;
    }
  }
  return allString ? "All Strings" : sum;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
