/*
  DOM [Events Simulation]
  - click
  - focus
  - blur الخروج
  - verification code "need focus and blur and Simulated"
*/

let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function () {
  two.focus();
};

one.onblur = function () {
  document.links[0].click();
};