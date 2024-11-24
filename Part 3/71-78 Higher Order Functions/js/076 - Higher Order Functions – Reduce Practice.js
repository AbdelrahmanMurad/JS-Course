/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];

let check = theBiggest.reduce(function (acc, current) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(acc.length > current.length ? acc : current);
  console.log(`#############`);
  return acc.length > current.length ? acc : current;
});

let check2 = theBiggest.reduce((acc, current) => acc.length > current.length ? acc : current);

console.log("Normal Fn: " + check);
console.log("Arrow Fn: " + check2);
console.log("---");
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars.filter(function (ele) { //عملية الفلترة
  return ele !== "@";
})
  .reduce(function (acc, current) { //عملية ضم الأحرف => join
    return `${acc}${current}`;
  });

let finalString2 = removeChars.filter(ele => ele !== "@").reduce((acc, current) => `${acc}${current}`);

// joinتقريبا نفس فكرة عمل ال
console.log(finalString);
console.log(finalString2);
console.log("--------------------------------------------");
