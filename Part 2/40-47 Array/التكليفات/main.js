//TODO:Q1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(myFriends.indexOf("Ahmed"), num)); // ["Ahmed", "Elham", "Osama"];

//TODO:Q2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

//TODO:Q3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
console.log(finalArr.concat(arrOne, arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

//TODO:Q4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.reverse()[0][0].slice(2).toUpperCase()); // ZERO

//TODO:Q5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
//1
console.log(haystack.includes(needle) ? "Found" : "Not Found");
//2
let result = haystack.includes(needle) ? "Found" : "Not Found";
console.log(result);
//3
if (haystack.includes(needle)) {
  console.log("Found");
}

// TODO:Q6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = allArrs.concat(arr1,arr2).sort().join("");
console.log(allArrs.slice(allArrs.indexOf("F")).toLowerCase()); // fxy
