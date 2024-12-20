/*
  Generators
  - Delegate Generator مولد نائب
  الترجمة ملهاش دخل
  */

function* generateNums() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  function* generateLetters() {
    yield "A";
    yield "B";
    yield "C";
  }
  
  function* generateAll() {
    yield* generateNums();
    yield* generateLetters();
    yield* [4, 5, 6]; 
    //من غير النجمة بطبع المكتوب
  }
  
  let generator = generateAll();
  
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.return("Z")); //close yield
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());