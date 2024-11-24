/*
  Loop
  - While
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let index = 0; //[1] Declare
while (index < products.length /*[2]*/) {
  console.log(products[index]);
  index += 1; //[3] //index++;
}

console.log("--------------------------------");
/*
while (true):
while True means loop forever.
The while statement takes an expression and executes the loop body while the expression evaluates to (boolean) "true".
True always evaluates to boolean "true" and thus executes the loop body indefinitely. 
It's an idiom that you'll just get used to eventually!
*/

/*
while (false):
while loops use only Boolean expression and when it is true.
So when it gets true it'll execute until it gets false.
while(false) means the condition is false which will end the loop. 
while(True) means the condition is True which will continue the loop
*/