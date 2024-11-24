/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

//*1
// function getData() {
//   return new Promise((res, rej) => {
//     // let users = ["Osama"];
//     let users = [];
//     if (users.length > 0) {
//       res("Users Found");
//     } else {
//       rej("No Users Found");
//     }
//   });
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

//*2
// function getData() {
//     let users = ["Osama"];
//     // let users = []; 
//     if (users.length > 0) {
//     return Promise.resolve("Users Found");
//   } else {
//     return Promise.reject("No Users Found");
//   }
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

//*3
async function getData() {
  // let users = ["Osama"];
  let users = [];
  if (users.length > 0) {
    return "Users Found";
  } else {
    // return "No Users Found";
    throw new Error("No Users Found");
  }
}

console.log(getData()); //return promise

getData().then(
  (resolvedValue) => console.log(resolvedValue),
  (rejectedValue) => console.log("Rejected " + rejectedValue)
);