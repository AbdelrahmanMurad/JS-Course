/*
Array Methods
- Length
---------------------
!Index Start From 0.
!Length Start From 1.
!Last index = Length-1
*/

let _myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
//index              0          1         2       3
console.log(_myFriends);
console.log(_myFriends.length); //4
// index is 3

// ------------------------------------------------------

/*
? Adding Gamal in new index. "new value"
  1- By Index.
        _myFriends[4] = "Gamal";
        console.log(_myFriends);
  2- By Length.  
*/
//By Length.  
_myFriends[_myFriends.length /*4*/] = "Gamal";
console.log(_myFriends);
//length = 5
//index = 4

// ------------------------------------------------------

/*
? update last value: 
  1- we can use index, but in this way we will need to count the array. and this is hard sometimes.
  2- length - 1 = last value of array. 
*/
_myFriends[_myFriends.length - 1] = "Moneer";
console.log(_myFriends[_myFriends.length - 1]); //Moneer
console.log(_myFriends);


//? changing length
_myFriends.length = 2;
console.log(_myFriends);

console.log("-----------------------------");
