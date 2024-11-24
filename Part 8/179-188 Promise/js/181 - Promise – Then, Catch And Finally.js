/*
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successfull Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successfull Or Failed => Do Something
*/

const myPromise = new Promise((resolveFunction, rejectFunction) => {
  let employees = ['aaa', 'bbb', 'ccc', 'ddd'];
  // let employees = ['aaa', 'bbb', 'ccc'];
  // let employees = [];
  if (employees.length === 4) {
    resolveFunction(employees);
    //resolveFunction = "Connection Established" => Store تخزين
    // لن تتم الطباعة حتى الان لان الامر السابق امر تخزين وليس طباعة
  } else {
    rejectFunction(Error("Number Of Employees Is Not 4"));
    // rejectFunction(("Number Of Employees Is Not 4"));
    // Error word will print the the line that has an Error.
    //rejectFunction = "Connection Failed" => Store تخزين
    // لن تتم الطباعة حتى الان لان الامر السابق امر تخزين وليس طباعة 
  }
});

//chain
myPromise
  .then((resolveValue) => {
    resolveValue.length = 2;
    return resolveValue;
  })
  .then((resolveValue) => {
    resolveValue.length = 1;
    return resolveValue;
  })
  .then((resolveValue) => {
    console.log(`The Choosen Emplyee Is ${resolveValue}`);
  })
  .catch((rejectedReason) => console.log(rejectedReason))
  .finally(console.log("The Operation Is Done"));//whether Successfull Or Failed