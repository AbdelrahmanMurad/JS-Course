/*
  Number
1  - Double Precision تخزين الارقام في الجافاسكريبت
2  - Syntactic Sugar ( use underscore: _ ) علوم الكومبيوتر وليس الجافاسكريبت
3  - e كم صفر
4  - ** أس
5  - With Decimal
-----------------------------------
6  - Number + BigInt عدد صحيح كبير
7  - Number Min Value
8  - Number Max Value
*/

//Double Precision
console.log(1000000);
//Syntactic Sugar
console.log(1_000_000);
//e كم صفر
console.log(1e6);

//** أس
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);

//With Decimal
console.log(1000000.0);

//--------------------- all of the previous = 1000000

//Number + BigInt
console.log(Number.MAX_SAFE_INTEGER);//اكبر رقم ءامن 

//Number Min Value
console.log(Number.MIN_VALUE);// اصغر رقم في اللغة بقدر اصله

//Number Max Value
console.log(Number.MAX_VALUE);//اخر رقم حقدر اوصله في اللغة
console.log(Number.MAX_VALUE + 23434343434); //لن يضاف


console.log("--------------------------------------");//seperate