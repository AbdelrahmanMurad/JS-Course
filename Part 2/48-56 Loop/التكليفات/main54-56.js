let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let array = [];

while (index < friends.length) {
  if (
    !friends[index].toString().toLowerCase().startsWith("a") &&
    typeof friends[index] == "string"
  ) {
    array.push(friends[index]);
    counter++;
    console.log(`"${counter} => ${friends[index]}"`);
  }
  index++;
}

// Output
// "1 => Sayed"
// "2 => Mahmoud"
