/*
  JSON
  - JSON object to JS object.
  - JSON.parse => Convert Text Data (JSON Object From User) To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/

// Get From Server (Text Data==JSON Object)
const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

// Convert To JS Object (JS Object)
const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log(myJsObject);

// Update Data
myJsObject["Username"] = "Elzero";
myJsObject["Age"] = 40;

// Send To Server (JSON)
const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);