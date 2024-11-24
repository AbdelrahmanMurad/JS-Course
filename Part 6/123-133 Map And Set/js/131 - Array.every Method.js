/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  every: run on every element and it should all the element be true, if one false then the boolean is false.
  some: run until one element makes the boolean true. 
*/

const locations = {
    20: "Place 1",
    30: "Place 2",
    10: "Place 3",
    40: "Place 4",
  };
  
  let mainLocation = 15;
  
  let locationsArray = Object.keys(locations);
  
  console.log(locationsArray);
  
  let locationArrayNumbers = locationsArray.map((n) => +n);//convert to number
  
  console.log(locationArrayNumbers);
  
  let check = locationArrayNumbers.every(function (e) {
    return e > this;
  }, mainLocation);
  
  console.log(check);