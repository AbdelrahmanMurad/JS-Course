/*
  Function
  - What Is Function ?
      ?DRY: Dont Repeat Yourself تطبيق مبدأ اسمه 
  - User-Defined vs Built In
      ?User-Defined: ميثودز انا أنشئها
      ?Built In: ميثودز جاهزة بستخدمها في اللغة
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
      ?parameter is the variable in the fuction that is user-defined.
      ?argument is the value of this variable.
      *parameter = argumant (value) => par = ar
      https://developer.mozilla.org/en-US/docs/Glossary/Parameter
  - Practical Example
*/
//-----------------------------------------
//-----------------------------------------
console.log(typeof console.log, "\n");

function sayHello(userName) {
  // username here is Parameter
  console.log(`Hi ${userName}`);
}

sayHello("Osama");
//username here is Argument
//parameter = argumnet (value)
sayHello("Sayed");
sayHello("Ali");
console.log("-----------------------------------");