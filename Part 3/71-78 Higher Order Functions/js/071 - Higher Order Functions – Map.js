/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array populated with the results of calling a provided function on every element in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array. [Man]
  - Index => The index of the current element being processed in the array. [Op] 
  - Array => The Current Array  [Op]

  Notes
  - Map Return A New Array
  - ممكن تستخدم للعمليات الحسابية

  Examples
  - Anonymous Function
  - Named Function

*/

let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);
console.log("---");

// Same Idea With Map

// ?  - Anonymous Function

let addSelf1 = myNums.map(function (element, index, arr) {

  console.log(`Current Element => ${element}`);
  console.log(`Current Index => ${index}`);
  console.log(`Array => ${arr}`);
  console.log(`This => ${this}`);
  console.log();

  // return element; //[ 1, 2, 3, 4, 5, 6 ]
  return element + element; //[ 2, 4, 6, 8, 10, 12 ]
}, 10);

//a is element
let addSelf2 = myNums.map((a) => a + a); //arrow callBack fn

console.log(addSelf1); //[ 2, 4, 6, 8, 10, 12 ]
console.log(addSelf2); //[ 2, 4, 6, 8, 10, 12 ]
console.log("---");

//?  - Named Function

function addition(ele) {
  return ele + ele;
}

let add = myNums.map(addition); //[ 2, 4, 6, 8, 10, 12 ]

console.log(add);
console.log("---------------------------------------");
