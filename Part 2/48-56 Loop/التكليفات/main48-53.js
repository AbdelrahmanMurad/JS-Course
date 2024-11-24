//TODO:Q1
let start_ex1 = 10;
let end_ex1 = 100;
let exclude = 40;

for (let i = start_ex1; i <= end_ex1; i += start_ex1) {
  if (i == exclude) {
    continue;
  } else console.log(i);
}
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100
console.log("#".repeat(15));

//TODO:Q2
let start_ex2 = 10;
let end_ex2 = 0;
let stop_ex2 = 3;

for (let j = start_ex2; j >= stop_ex2; j--) {
  j < start_ex2 ? console.log(`${end_ex2}${j}`) : console.log(j);
}
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03
console.log("#".repeat(15));

//TODO:Q3
let start_ex3 = 1;
let end_ex3 = 6;
let breaker = 2;

for (let i = start_ex3; i <= end_ex3; i++) {
  console.log(i);
  for (let j = breaker; j <= breaker * breaker; j *= breaker) {
    console.log(`-- ${j}`);
  }
}

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4
console.log("#".repeat(15));

//TODO:Q4
let index = 10;
let jump = 2;
let end_ex4 = 0;

for (;;) {
  console.log(index);
  index -= jump;
  if (index < jump * jump) break;
}

// Output
// 10
// 8
// 6
// 4
console.log("#".repeat(15));

//TODO:Q5
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let validNames = [];

for (let i = +false; i < friends.length; i++) {
  if (!friends[i].toLowerCase().startsWith(letter)) {
    validNames.push(friends[i]); //last element
  }
}
for (let i = +false; i < validNames.length; i++) {
  console.log(`"${i + +true} => ${validNames[i]}"`);
  // console.log(`"${i + letter.length} => ${validNames[i]}"`);
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
console.log("#".repeat(15));

//TODO:Q6
let start_ex6 = 0;
let swappedName = "elZerO";
let array = [];
for (let i = start_ex6; i < swappedName.length; i++) {
  if (swappedName.charAt(i) === swappedName.charAt(i).toLowerCase()) {
    array.push(swappedName.charAt(i).toUpperCase());
  } else {
    array.push(swappedName.charAt(i).toLowerCase());
  }
}
console.log(array.join(""));

// Output
// "ELzERo"
console.log("#".repeat(15));

//TODO:Q7
let start_ex7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
let num = [];

for (let i = start_ex7; i < mix.length; i++) {
  if (typeof mix[i] == "number") {
    num.push(mix[i]);
  }
}
num.shift();
for (let index = start_ex7; index < num.length; index++) {
  console.log(num[index]);
}
// Output
// 2
// 3
// 4
