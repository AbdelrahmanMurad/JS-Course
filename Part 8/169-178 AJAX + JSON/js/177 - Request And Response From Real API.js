/*
  Ajax
  *- Ready State => Status Of The Request
  [0] Request Not Initialized   
  [1] Server Connection Established => Serverفي اتصال حصل مع ال
  [2] Request Received => تم الاستلام
  [3] Processing Request => معالجة
  [4] {Request Is Finished} And {Response Is Ready} => انتهى
  *- Status
  [200] Response Is Successful
  [404] Not Found
  - Ready State difference than Status.
  Status code list: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
*/

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos"); // => this line is  async.
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos", true);//true is default for async.
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function () {
  // console.log(myRequest.readyState);
  // console.log(myRequest.status);
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};
