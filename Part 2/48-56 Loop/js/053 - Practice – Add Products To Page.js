/*
  _products Practice
*/

let _products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors = ["Red", "Green", "Blue"];
let showCount = 5;

document.write(`<h1>Show ${showCount} _products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
    document.write(`<h3>[${i + 1}] ${_products[i]}</h3>`);
    for (let j = 0; j < colors.length; j++) {
      document.write(`<p>${colors[j]}</p>`);
    }
    document.write(`<p>${colors.join(" | ")}</p>`);
  document.write(`</div>`);
}
