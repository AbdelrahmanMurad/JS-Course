/*
  DOM [Deal With Elements]
  - before [Element || String] قبل العنصر  من برا=> input: string or node or element
  - after [Element || String] بعد العنصر من برا=> input: string or node or element
  - append [Element || String] "في اخر العنصر "في داخل العنصر=> input: string or node or element
  - prepend [Element || String] "في اول العنصر "في داخل العنصر=> input: string or node or element
  - remove (
    in css => display:none; not shown
    in js => remove(); delete from DOM tree "from doument".
  ) 
*/

let element = document.getElementById("my-div");
let createdP = document.createElement("p");

// element.remove();
