/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/
// السؤال ان يتم استبدال المتغيرات  وجعلها في مكانها الصحيح 
let book = "Video";
let video = "Book";
// تذكر اننا نحتاج متغير ثالث 
// تذكر مثال الدكتور اياد الاغا

// Save Book Value In Stash
// let stash = book; // Video

// Change Book Value
// book = video; // Book

// Change Video Value
// video = stash; // Video

[book, video] = [video, book]; //Destructuring اسهل بكثير من السابق

console.log(book);
console.log(video);