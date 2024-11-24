/*
  Scope
  - Block Scope [If, Switch, For,...etc => خاص بهم]
  - var vs let

*/

var x = 10;
var y = 10;
var z = 10;

if (10 === 10) {
  var x = 50;
  let y = 50;
  const z = 50;
  console.log(`From If Block ${x}`);//50
  console.log(`From If Block ${y}`);//50
  console.log(`From If Block ${z}`);//50
  // let x = 50;
  // var y = 50;
  // const z = 50;
  //Error
}

console.log(`From Global ${x}`);//50,because we are using var from if block
console.log(`From Global ${y}`);//10
console.log(`From Global ${z}`);//10
//! So, Now we know if we want to apply Block Scope in variabels, we need let and const. not var
console.log("-----------------------------------------");

/*
In JavaScript, **block scope** refers to the visibility of variables and functions within a **block**. A block is a set of statements enclosed in curly braces `{}`. 

Before the introduction of ES6 (2015), JavaScript had only **global scope** and **function scope**. However, ES6 introduced two new keywords, `let` and `const`, which provide block scope in JavaScript ¹⁴⁵. 

Variables declared inside a block using `let` or `const` cannot be accessed from outside the block. For example:

```
{
  let x = 2;
}
console.log(x); // Output: ReferenceError: x is not defined
```

In the above example, `x` is declared inside a block and cannot be accessed outside it.

On the other hand, variables declared inside a block using `var` can be accessed from outside the block. For example:

```
{
  var y = 3;
}
console.log(y); // Output: 3
```

In the above example, `y` is declared inside a block using `var` and can be accessed outside it. 
*/