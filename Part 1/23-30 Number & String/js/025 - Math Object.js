/*
  Math Object
  - round() تقريب
  - ceil() سقف
  - floor() ارضية
  - min() 
  - max()
  - pow() أس
  - random() - Returns a pseudorandom number between 0 and 1.
  - trunc() [Es6] truncateقطع  
        intتحول الى 
*/

console.log(Math.round(99.2)); //99
console.log(Math.round(99.5)); //100

console.log(Math.ceil(99.2)); //100
console.log(Math.floor(99.9)); //99

console.log(Math.min(10, 20, 100, -100, 90)); //-100
console.log(Math.max(10, 20, 100, -100, 90)); //100

console.log(Math.pow(2, 4)); //16
console.log(Math.random());
console.log(Math.trunc(99.5)); //99
console.log("--------------------------------------"); //seperate
