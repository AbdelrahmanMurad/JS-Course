/*
  Scope
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
*/

function parent() {
  let a = 10;
  //nested Fn
  function child() {
    console.log(a);//10
    // console.log(`From Child ${b}`); //Error لان المتغير معرف في الاسفل
    //nested Fn
    function grand() {
      let b = 100;
      console.log(`From Grand ${a}`);//10
      console.log(`From Grand ${b}`);//100
    }
    grand();
  }
  child();
}
parent();
//!يقرأ الكود بالترتيب compilerتذكر انك يجب ان تلتزم بترتيب الكود لان ال

/*
**Lexical scope** in JavaScript refers to the **visibility** of **variables** and **functions** in a **nested** environment. It means that the **inner function** can access the **outer function's** variables and functions, but the reverse is not true ¹²³⁴⁵.

In other words, when a function is defined inside another function, it has access to the outer function's variables and parameters. However, the outer function cannot access the inner function's variables and parameters.

Here's an example:

```
function outerFunction() {
  const outerVariable = "I am visible inside outerFunction";
  
  function innerFunction() {
    const innerVariable = "I am visible inside innerFunction";
    console.log(outerVariable); // Output: I am visible inside outerFunction
  }
  
  console.log(innerVariable); // Output: ReferenceError: innerVariable is not defined
}
```

In the above example, `innerFunction()` has access to `outerVariable` because it is defined in the outer scope. However, `outerFunction()` does not have access to `innerVariable` because it is defined in the inner scope.
*/
