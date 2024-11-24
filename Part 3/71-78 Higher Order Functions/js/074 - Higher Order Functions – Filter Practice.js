/*
  Filter
  - Filter Longest Word By Number
*/

//? Filter"Ignore" Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence.split(" ").filter(function (ele) {
    return ele.length <= 4;
  })
  .join(" ");

let smallWords2 = sentence.split(" ").filter(ele=>ele.length <= 4).join(" ");

console.log(smallWords);
console.log(smallWords2);
console.log("---");

//? Filter"Ignore" Numbers
let ignoreNumbers = "Elz123er4o";

let ign = ignoreNumbers.split("").filter(function (ele) {
    return isNaN(parseInt(ele));
    return isNaN(parseInt(ele)) ? true : false;
    return isNaN(parseInt(ele)) ? ele : "";// => map

  })
  .join("");

  let ign2 = ignoreNumbers.split("").filter(ele=>isNaN(parseInt(ele))).join("");

console.log(ign);
console.log(ign2);
console.log("---");

//? Filter"Ignore" Strings then Multiply numbers.
let mix = "A13BS2ZX";

let mixedContent = mix.split("").filter(function (ele) {
    return !isNaN(parseInt(ele)); // عملية الفلترة
  }).map(function (ele) { // عملية الحسبة
    return ele * ele;
  })
  .join("");

let mixedContent2 = mix.split("").filter(ele=>!isNaN(parseInt(ele))).map(ele=>ele*ele).join("");

console.log(mixedContent);
console.log(mixedContent2);
console.log("---");

console.log("--------------------------------------------");
