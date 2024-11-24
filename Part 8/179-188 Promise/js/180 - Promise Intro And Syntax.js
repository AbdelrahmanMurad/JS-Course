/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life.
  - Promise Is Something That Will Happen In The Future.
  ?- Promise Avoid Callback Hell.
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value
           والنتيجة الخاصة فيهasyncيمثل الحالة الخاصة ب

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully => Resolved State
  --- Rejected: Failed => Rejected State

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To then() And catch()) Upon Finishing.

  - then() => Fulfilled - Resolved State || Rejected State
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]
  - catch() => Throws an Error.
*/

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   // let connect = true;
//   let connect = false;
//   if (connect) {
//     resolveFunction("Connection Established");
//     //resolveFunction = "Connection Established" => Store تخزين
//     // لن تتم الطباعة حتى الان لان الامر السابق امر تخزين وليس طباعة
//   } else {
//     rejectFunction(Error("Connection Failed"));
//     //rejectFunction = "Connection Failed" => Store تخزين
//     // لن تتم الطباعة حتى الان لان الامر السابق امر تخزين وليس طباعة  
//   }
// }).then( //امر الطباعة
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );
//================================================================
const myPromise = new Promise((resolveFunction, rejectFunction) => {
  // let connect = false;
  let connect = true;
  if (connect) {
    resolveFunction("Connection Established");
    //resolveFunction = "Connection Established" => Store تخزين
    // لن تتم الطباعة حتى الان لان الامر السابق امر تخزين وليس طباعة
  } else {
    rejectFunction(Error("Connection Failed"));
    //rejectFunction = "Connection Failed" => Store تخزين
    // لن تتم الطباعة حتى الان لان الامر السابق امر تخزين وليس طباعة  
  }
});

console.log(myPromise);

// First way =============================================
// myPromise.then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
// //   (element) => console.log(`Good ${element}`); الاسم ملهوش دعوة
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// //   (element) => console.log(`Bad ${element}`); الاسم ملهوش دعوة
// );

// myPromise.then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

// myPromise.then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

// Second way =============================================
let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
// let resolver = (element) => console.log(`Good ${element}`); الاسم ملهوش دعوة
let rejecter = (rejectValue) => console.log(`Bad ${rejectValue}`);
// let rejecter = (element) => console.log(`Bad ${element}`); الاسم ملهوش دعوة

myPromise.then(resolver, rejecter);