/*
  Modules وحدة برمجة تنفذ وظيفة معينة
    - Import and Export
      export تصدير
      import استيراد
*/

let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

// export let a = 10;
// export let arr = [1, 2, 3, 4];

// export function saySomething() {
//   return `Something`;
// }

//Another way
export { a, arr, saySomething };