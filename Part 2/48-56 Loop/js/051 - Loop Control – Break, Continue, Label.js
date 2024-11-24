/*
  Loop Control
  - Break
        اللي هو فيها حالياLoopبطلع من ال 
  - Continue 
        Loopوكمل الLoopالغي العنصر من ال
  - Label 
        identifier for loop
  */

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

//!break
//1
for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  for (let j = 0; j < colors.length; j++) {
    console.log(`--- ${colors[j]}`);
    if (colors[j] === "Green") {
      break;
    }
  }
}

//////////////////////////////////
console.log("#########".repeat(2));
//////////////////////////////////

//2
for (let index = 0; index < products.length; index++) {
  console.log(products[index]);
  for (let y = 0; y < colors.length; y++) {
    console.log("(", colors[y], ")");
  }
  if (products[index] === "Pen") {
    break;
  }
}

//////////////////////////////////
console.log("#########".repeat(2));
//////////////////////////////////

//!continue
let products_2 = ["Keyboard", "Mouse", 10, 20, "Pen", "Pad", 30, 40, "Monitor"];

let colors_2 = ["Red", "Green", "Black"];

for (let m = 0; m < products_2.length; m++) {
  if (typeof products_2[m] === "number") {
    continue;
  }
  console.log(products_2[m]);
}

//////////////////////////////////
console.log("#########".repeat(2));
//////////////////////////////////

//!Label (mainLoop, nestedLoop)
mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break mainLoop;
      //mainLoobوقفلي ال
    }
  }
}