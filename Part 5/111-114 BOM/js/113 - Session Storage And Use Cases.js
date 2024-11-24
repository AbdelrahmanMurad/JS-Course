/*
  BOM [Browser Object Model]
Local storage: يحفظ البيانات حتى عند اغلاق البراوزر 
  Session Storage: يحتفظ في البيانات في الجلسة اللي انت فيها فقط، يعني اذا اغلقت البراوزر لن يتم الحفظ
  لا يوجد منهم افضل من الاخر لان لكل منهم حالة استخدام
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

document.querySelector(".name").onblur = function () {
    // console.log(this.value);
    window.localStorage.setItem("input-name", this.value);
  };