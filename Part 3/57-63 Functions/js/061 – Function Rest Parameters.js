/*
  Function
  - Rest Parameters
      ?parametersعدد لا نهائي من ال
        ...numbers: array of argumants
  - Only One Allowed
  - Must Be Last Element
*/

function calc(...numbers) {
  // console.log(Array.isArray(numbers));//true
  let result = 0; //*عداد
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]; // result = result + numbers[i]
  }
  return `Result Is ${result}`;
}

console.log(calc(10, 20, 10, 30, 50, 30));
console.log("-----------------------------------");
