/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - if
  - nested if
  - Loop             بنقدر نستخدمها في السطر24  
  - Condition
*/
/*
  us: userName
  ag: age
  rt: rate
  sk: skills     rest parametersاذا نستخدم الparametersغير متأكد من عدد ال
*/
function showInfo(us = "unknown", ag = "unknown", rt = 0, show = "Yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${us}</h2>`);
  document.write(`<p>Age: ${ag}</p>`);
  document.write(`<p>Hour Rate: $${rt}</p>`);
  if (show === "Yes") {
    if (sk.length > 0) {
      document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
    } else {
      document.write(`<p>No Skills</p>`);
    }
  } else {
    document.write(`<p>Skills Is Hidden</p>`);
  }
  document.write(`</div>`);
}

showInfo("Osama", 38, 20, "Yes", "Html", "CSS");

// function showInfo(un = "unknown", age = "unknown", rt = 0, show = "Yes", ...sk) {
//   console.log(`Hello ${un}`);
//   console.log(`your age is ${age}`);
//   console.log(`your hour rate is: ${rt}`);
//   if (show=="Yes") {
//     console.log(`skills: ${sk.join(" | ")}`);
//   } else console.log("skills are hidden.");
// }

// showInfo("ahmad", 13, 5, "No", "html", "css", "js")