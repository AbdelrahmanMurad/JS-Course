/*
  Generators المولدات
  - Generator Function Run Its Code When Required. الا عند الحاجة runلا يتم تنفيذ ال
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable, object
*/

function* generateNumbers() {
  yield 1;
  console.log("Hello After Yield 1");
  yield 2;
  yield 3;
  yield 4;
}

let generator = generateNumbers();

console.log(typeof generator);
console.log(generator);

// console.log(generator.next().done);
// console.log(generator.next().value);
console.log(generator.next()); //  yield 1;
console.log(generator.next()); //  yield 2;
console.log(generator.next()); //  yield 3;
console.log(generator.next()); //  yield 4;
console.log(generator.next()); //  value => undefind done => true;

for (let value of generateNumbers()) {
  console.log(value);
} //مسموح ان يتم عرض البيانات مرة اخرى
/*  السبب
functionتم الاستدعاء من خلال ال
*/

for (let value of generator) {
  console.log(value);
} //غير مسموح ان يتم عرض البيانات مرة اخرى
/*   السبب 
variableتم الاستدعاء من خلال ال
*/
