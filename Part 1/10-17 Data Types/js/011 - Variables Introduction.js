/*
  Variables Intro
  - What Is Variable ?
  - Why We Use Variables ?
  - Declare A Variable And Use
  - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
  - Variable Without Var
  - Multiple Variables In The Same Line
  ? var [a,b,c,d] = [0,1,2,3] => https://stackoverflow.com/questions/4166785/javascript-how-to-define-multiple-variables-on-a-single-line
  - Id And Global Variable
  - Loosely Typed vs Strongly Typed
      line 25
*/

var user = "ahmad",
  age = 37;

console.log("Name: " + user);
console.log("Age: " + age);

console.log(hello);

hello.innerHTML = "Option";

/* 
  - Loosely Typed vs Strongly Typed
      ? Loosely Typed Language:
          A loosely typed language is a programming language that does not require a variable to be defined.
          For example, Perl,js is a loosely typed language, you can declare a variable, 
          but it doesn't require you to classify the type of variable.
        *Is JavaScript is a loosely typed language?
        JavaScript is loosely typed.
        You don't have to tell that a string is a string,
        nor you can require a function to accepts an integer as its parameter.
        This gives JavaScript a lot of flexibility.

      ? Strongly Typed Language:
          A strongly typed language is a programming language that does require a variable to be defined.
          For example, Python,Java is a strongly typed language,
          you can't declare a variable without classifying the type of variable.
*/