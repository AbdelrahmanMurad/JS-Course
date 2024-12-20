/*
  String Methods
  - Access With Index()
  - Access With charAt()
  
  - length()
  - trim() - delete start spaces
  
  - toUpperCase()
  - toLowerCase()
  - *Chain Methods*
*/

let theName = "  Ahmed  w";


console.log("- " + theName[1]);
console.log("- " + theName[5]);
console.log("- " + theName.charAt(1));
console.log("- " + theName.charAt(5));

console.log(theName.length);
console.log(theName);
console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(2).toUpperCase()); //chain
console.log("--------------------------------------"); //seperate
