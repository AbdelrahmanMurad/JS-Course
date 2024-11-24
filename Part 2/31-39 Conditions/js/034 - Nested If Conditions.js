/*
  Nested If
*/

let _price = 100;
let _discount = false;
let _discountAmount = 30;
let _country = "Egypt";
let _student = true;

// if (_discount === true) {
if (_discount) {
  _price -= _discountAmount;
} else if (_country === "Egypt") {
  if (_student === true) {
    _price -= _discountAmount + 30;//_price -= (_discountAmount + 30);
  } else {
    _price -= _discountAmount + 10;//_price -= (_discountAmount + 10);
  }
} else {
  _price -= 10;
}

console.log(_price);
console.log("----------------------------------");
