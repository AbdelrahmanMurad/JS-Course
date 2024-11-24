/*
?  Arithmetic Operators
  1. + Addition
  2. - Subtraction
  3. * Multiplication
  4. / Division
  5. ** Exponentiation (ES7) الأس
  7. % Modulus (Division Remainder) الباقي
  8. ++ Increment [ Post / Pre ] 
    ! post: n++ الطباعة اولا ثم الحسبة ثم التخزين 
    ! pre: ++n الحسبة اولا ثم الطباعة ثم التخزين
  9. -- Decrement [ Post / Pre ]
    ! n-- الطباعة اولا ثم الحسبة ثم التخزين 
    ! --n الحسبة اولا ثم الطباعة ثم التخزين
*/
// * In Console the colored text is a number and the white\gray is a string.
console.log(10 + 20);
console.log(10 + "Osama"); //! + Addition => concat (dataType: String)

console.log(10 - 20);
console.log(10 - "Osama"); //! - Subtraction doesnt support concat => data type is NaN (Not a Number).
console.log(typeof NaN);//number
/* data type of NaN: number, not string. WHY ???
ANSWER => In JavaScript, NaN stands for "Not-A-Number" and is a global property that represents an invalid number ¹.
          It is a value of numeric data types (usually floating-point types, but not always) that represents the result of an invalid operation
          such as dividing by zero ⁴. The typeof operator in JavaScript returns the data type of a variable. 
          When typeof NaN is executed, it returns "number" because NaN is a numeric value ⁵. 
          Therefore, the data type of NaN is *number*, not string.
 */

console.log(10 * 20);
console.log(10 * -20);

console.log(20 / 5);
console.log(20 / 3);

console.log(2 ** 4); //! 2^4=16
console.log(2 * 2 * 2 * 2);

console.log(10 % 2); //Remainder is 0 الباقي
console.log(11 % 2); // Remove 1

console.log("-----------------------"); //to make a separate.
