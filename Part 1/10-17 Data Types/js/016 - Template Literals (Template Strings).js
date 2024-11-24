/*
  Template Literals (Template Strings)
*/

// First Example

let e = "We Love";
let f = "JavaScript";
let g = "And";
let h = "Programming";

console.log(e + ' "" ' + f + "\n" + g + " " + h);
// ES6
console.log(`${e} "" '' \\ ${f}
${g} ${h}`);
// `` => backtick

// Second Example

let title = "Elzero";
let desc = "Elzero Web School";
// ES6
let markup = `
  <div class="card">
    <div class="child">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  </div>
`;

document.write(markup);
