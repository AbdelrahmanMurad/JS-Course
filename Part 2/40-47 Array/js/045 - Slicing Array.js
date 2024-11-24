/*
  Arrays Methods [Slicing]
!  - slice(Start [Opt], End [Opt] Not Including End)
    --- slice() => All Array
    --- If Start Is Undefined => 0
    --- If Negative => Count From End
    --- If End Is Undefined or > Indexes => Slice To The End Array.length
    --- Return New Array
!  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
    ---  DeleteCount: كم من واحد بدنا نحذف
    --- If Negative => Start From The End
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends);
console.log(myFriends.slice());
console.log(myFriends.slice(1));
console.log(myFriends.slice(1, 3));// Not Including [3] 
console.log("----");
console.log(myFriends.slice(-3));
//                                    ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"]
//console.log(myFriends.slice(-3));       -6        -5     -4       -3      -2       -1
//["Osama", "Gamal", "Ameer"]
console.log(myFriends.slice(1, -2));
//                                    ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"]
//console.log(myFriends.slice(1, -2));    -6        -5     -4       -3      -2       -1
//["Sayed","Ali","Osama"]
console.log(myFriends.slice(-4, -2)); //["Ali", "Osama"]
console.log("----");
console.log(myFriends); //لم يتم التخزين بل تم عمل مصفوفات جديدة
console.log("----");

//*splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
myFriends.splice(0, 0, "Sameer", "Samara");
console.log(myFriends);
myFriends.splice(0, 1, "Abood", "Momen"); //sameerحذف
console.log(myFriends);
myFriends.splice(0, 2, "Samah", "Tareq"); //Abood,Momenحذف
console.log(myFriends);
myFriends.splice(1, 2, "Alaa", "Hossam"); //Tariq,Samaraحذف
console.log(myFriends);
console.log("-----------------------------");
