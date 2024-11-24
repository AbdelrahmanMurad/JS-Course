/*
  String Methods
  - substring(Start [Mandatory], End [Optional] Not Including End)
  --- Start > End => It Will Swap
  --- Start < 0 => It Will Start From 0
  --- Use Length To Get Last Character

  - substr(Start [Mandatory], Characters To Extract)
  --- Start >= Length = ""
  --- Negative => Start From End

  - includes(Value [Mandatory], Start [Optional] Default 0) [ES6]
  - startsWith(Value [Mandatory], Start [Optional] Default 0) [ES6]
  - endsWith(Value [Mandatory], Length [Optional] Default Full Length) [ES6] 
*/

let a = "Elzero Web School";

console.log(a.length);

console.log(a.substring(2, 6));
console.log(a.substring(6, 2));//Start > End => It Will Swap
console.log(a.substring(-10, 6));// Start < 0 => It Will Start From 0 => (0, 6)
console.log(a.substring(a.length - 5, a.length - 3));

console.log(a.substr(0, 6));
console.log(a.substr(17));//Start >= Length = ""
console.log(a.substr(-3));//Negative => Start From End
console.log(a.substr(-5, 2));//Negative => Start From End
// !why substr method is canceled ?
/*
? Deprecated: This feature is no longer recommended. 
      Though some browsers might still support it,
      it may have already been removed from the relevant web standards,
      may be in the process of being dropped,
      or may only be kept for compatibility purposes.
      Avoid using it, and update existing code if possible;
      see the compatibility table at the bottom of this page to guide your decision. 
      Be aware that this feature may cease to work at any time.
? Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
*/

console.log(a.includes("Web"));
console.log(a.includes("Web", 8));

console.log(a.startsWith("E"));
console.log(a.startsWith("E", 2));
console.log(a.startsWith("zero", 2));

console.log(a.endsWith("l"));
