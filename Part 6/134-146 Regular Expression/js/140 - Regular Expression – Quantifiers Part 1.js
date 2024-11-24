/*
  Regular Expression

  Quantifiers تحديد الكمية
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one اهم واحد فيهم
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w+@\w+.(com|net)/ig;
let mailsRe = /\w+@\w+.\w+/gi;
console.log(mails.match(mailsRe));

let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let numsRe = /0\d*0/gi;
console.log(nums.match(numsRe));

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRee = /https?:\/\/?(www.)?\w+.\w+/gi; //we used escaping, rusult is  [ 'https://google.com', 'http://www.website.net' ]
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi; //we used escaping, result is [ 'https://google.com', 'http://www.website.net', 'web.com' ]
console.log(urls.match(urlsRee));
console.log(urls.match(urlsRe));
