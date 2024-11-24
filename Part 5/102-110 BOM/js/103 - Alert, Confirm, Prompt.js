/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean(true/false)
  - prompt(Message, Default Message) => Collect Data
  مش حنستخدمهم في المستقبل
*/

// window.alert("Test"); same as this.alert("Test"); same as alert("Test");
// alert("Test"); //حيوقف كل الوظائف حتى نضغط على زر الموافقة
// console.log("Test");
// html cssيوجد بدائل بال

// let confirmMsg = confirm("Are You Sure?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }

let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");

console.log(promptMsg);