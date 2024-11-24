/*
  DOM: Document Object Model
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Elements By Tag Name
  --- Find Elements By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

let myIdElement = document.getElementById("my-div"); //*Find Element By ID
console.log(myIdElement); //One Element

let myTagElements = document.getElementsByTagName("p"); //*Find Element By Tag Name
console.log(myTagElements[1]); //Elements not Element
//!we need indexing to to determine one element.

let myClassElements = document.getElementsByClassName("my-span"); //*Find Element By Class Name
console.log(myClassElements[1]); //Elements not Element
//!we need indexing to to determine one element.

let myQueryElement = document.querySelector(".my-span"); //*Find Element By CSS Selectors "class"
// let myQueryElement = document.querySelector("#my-span");//*Find Element By CSS Selectors "id"
console.log(myQueryElement); //One Element

let myQueryAllElement = document.querySelectorAll(".my-span"); //*Find Element By Collection "class"
// let myQueryAllElement = document.querySelectorAll("#my-span");//*Find Element By Collection "id"
console.log(myQueryAllElement[1]); //Elements not Element

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);
