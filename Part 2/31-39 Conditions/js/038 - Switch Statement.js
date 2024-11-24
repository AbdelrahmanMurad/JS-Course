/*
  Switch Statement
  switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/

let day = "A";

switch (day) {
  default:
    console.log("Unknown Day");
    break;
  // breakفوق يجب وضع ال defaultفي حال وضعنا ال
  case "A":
    console.log("Saturday");
    break;
  case "B":
    console.log("Sunday");
    break;
  case "C"://نفس نتيجة الحالة الثالثة 
  case "D":
    console.log("Monday");
    break;
  // default:
  //   console.log("Unknown Day");
}
