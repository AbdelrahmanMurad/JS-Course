/*
* ===========================================
* == Variables And Concatenation Challenge ==
* ===========================================

* [1] Create 3 Variables [Title, Desctiption, Date]
* -- All In One Statement
* -- Variable Name Must Be Two Words
* -- Title Content Is "Elzero"
* -- Description Content Is "Elzero Web School"
* -- Date Content Is "25/10"
* [2] Create Variable Contains Div And This Div Contains
* -- H3 For Title
* -- P For Description
* -- Span For Time
* [3] Add This Card To Page 4 Times
* [4] Use Template Literals For Concatenate

* Extra
* - Use ES6 Repeat
*/

//![1]
// var or let or const
var [titleChannle, descriptionCourse, dateCourse] = [
  " Elzero\n",
  "Elzero Web School\n",
  "25/10",
];
console.log(titleChannle, descriptionCourse, dateCourse);
    // ? another solution
    // let chTitle = "Elzero",
    //   chDescription = "Elzero Web School",
    //   chDate = "25 / 10";
//![2]
let markup = `<div>
<h3>hello ${titleChannle}</h3>
<p>${descriptionCourse}</p>
<span>${dateCourse}</span>
</div>`;

//![3]
document.write(markup.repeat(4));
