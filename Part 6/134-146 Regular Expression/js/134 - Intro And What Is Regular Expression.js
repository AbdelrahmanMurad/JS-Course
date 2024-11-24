/*
  Regular Expression
  - Email
  - IP
  - Phone
  - URL
*/

let str1 = "10 20 100 1000 5000";
let str2 = "Os1 Os12 Os123 Os123Os Os12312Os123";

let invalidEmail = "Osama@@@gmail....com";
let validEmail = "o@nn.sa";

let ip = "192.168.2.1"; // IPv4

let url = "elzero.org"; //valid
url = "elzero.org/"; //valid
url = "http://elzero.org/"; //valid
url = "http://www.elzero.org/"; //valid
url = "https://.elzero.org/"; //valid
url = "https://www.elzero.org/"; //valid
url = "https://www.elzero.org/?facebookid=asdasdasd"; //valid
