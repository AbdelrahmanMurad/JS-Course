/*
  Modules
  - Export Alias
  - Named Export 
          باللقب importواستدعاء المتغير في ال Exportكتابة اللقب الخاص بالمتغير في ال 
  - Default Export
          وبنقدر نستدعيها من غير اسمها من اي مكان يعني الاسم ملهوش علاقة بالموضوع just one default export له Module كل 
  - Import All
*/

let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

export { a as myNumber, arr, saySomething };

export default function () {
  return `Hello`;
}
