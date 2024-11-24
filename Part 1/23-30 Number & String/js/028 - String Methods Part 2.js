/*
  String Methods
  - indexOf(Value [Mandatory], Start [Optional] 0)
  - lastIndexOf(Value [Mandatory], Start [Optional] Length)
  - slice(Start [Mandatory], End [Optional] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Optional], Limit [Optional]) //! output: Array
      - Separator: افصل من الرمز الفلاني اللي موجود في الجملة - او احذف الرمز هذا
      - Limit: كم عدد العناصر اللي حتطلع في الناتج
*/

let b = "Elzero Web School";

console.log(b.indexOf("Web"));
console.log(b.indexOf("Web", 8));//-1 means not found
console.log(b.indexOf("o")); // 5
console.log(b.lastIndexOf("o")); // 15

console.log(b.slice(2, 6));//Not Include End
console.log(b.slice(-5, -3));

console.log(b.repeat(5));

console.log(b.split("", 6));
console.log("--------------------------------------"); //seperate
