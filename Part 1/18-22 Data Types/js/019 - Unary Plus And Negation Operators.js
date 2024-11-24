/*
    (+) Unary Plus [Return Number If Its Not Number]
    (-) Unary Negation [Return Number If Its Not Number + Negates It]
*/

// (+) Unary Plus [Return Number If Its Not Number]
// Normal Number
console.log(+100);//100
// String Number
console.log(+"100");//100
// String Negative Number
console.log(+"-100");//-100
// String Text
console.log(+"Osama"); //NaN ,datatype: number
// Float
console.log(+"15.5");//15.5
// Hexadecimal Numeral System => 0xFF
console.log(+0xff);//255
// null
console.log(+null);//0
// false
console.log(+false);//0
// true
console.log(+true);//1


//(-) Unary Negation [Return Number If Its Not Number + Negates It]
// Normal Number
console.log(-100);//-100
// String Number
console.log(-"100");//-100
// String Negative Number
console.log(-"-100");//100
// String Text
console.log(-"Osama");//NaN
// Float
console.log(-"15.5");//-15.5
// Hexadecimal Numeral System => 0xFF
console.log(-0xff);//-255
// null
console.log(-null);//-0
// false
console.log(-false);//-0
// true
console.log(-true);//-1


//converting a string to a number by constructor
console.log(Number("100"));//100


console.log("-----------------------"); //to make a separate.
