//TODO: Q1
// Replace ? With Arithmetic Operators // result is 0
console.log(10 * 20 + (15 % 3) + 190 + 10 - 400);//200 + 0 + 200 - 400 = 0
// or 
console.log(+(10 > 20 > 15 > 3 > 190 > 10 > 400));
/*
10 > 20 = flase = 0
0 > 15 = flase = 0
0 > 3 = flase = 0
0 > 190 = flase = 0
0 > 10 = false = 0
0 > 400 = false = 0
result is 0
*/

//TODO: Q2
let num = 3;

// Solution One
console.log(num + num); // 6
// Solution Two
console.log(num + +true + +true + +true); // 6
// Soultion Three
console.log(num * num - num); // 6
// Soultion Four
console.log(num * (num - +true)); // 6
// Solution Five
console.log((num / num + num / num) * num); // 6
// Solution Six
console.log((num += num)); // 6

//TODO: Q3
let number = "10";

// Solution One
console.log(+number + +number); // 20
// Solution Two
console.log(Number(number) + Number(number)); // 20
// Soultion Three
console.log(+number + Number(number)); // 20

//TODO: Q4
let points = 10;

// Write Your Code Here

console.log(points + true + true + true); // 13

// Write Your Code Here

console.log(points - true - true); // 8;
