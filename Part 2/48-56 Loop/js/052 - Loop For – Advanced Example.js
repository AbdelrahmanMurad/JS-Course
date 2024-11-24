/*
  Loop For Advanced Example (;; Loop)
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let i = 0;                                       //[1] Declare
for (; ;) {
  console.log(products[i]);
  i++;                                           //[3] Calculation
  if (i === products.length) break;              //[2] Condition
}
console.log("-------------------------------");
