/*
  DOM [Traversing] الانتقال بين العناصر
  - nextSibling الشقيق التالي مباشرة حتى لو كان كومنت
  - previousSibling 

  - nextElementSibling الشقيق او العنصر التالي ولن يكون كومنت يجب ان يكون بين تاجز
  - previousElementSibling

  - parentElement العنصر الأب
*/

let span = document.querySelector(".two");

console.log(span.parentElement);

span.onclick = function () {
  span.parentElement.remove();
};
