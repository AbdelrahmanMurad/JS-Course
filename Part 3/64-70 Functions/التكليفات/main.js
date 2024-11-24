//TODO:Q1
function getDetails(zName, zAge, zCountry) {
  function containsWhitespace(str) {
    return /\s/.test(str);
  }

  let name = function namePattern(zName) {
    if (typeof zName === "string" && containsWhitespace(zName)) {
      let zName_2 = zName.indexOf(" ") + 2;
      return zName.substring(0, zName_2) + ".";
    } else return "Something wrong";
  };

  let age = function ageWithMessage(zAge) {
    if (typeof zAge === "string") {
      return `Your Age Is ${parseInt(zAge)}`;
    } else return "Something wrong";
  };

  let country = function countryTwoLetters(zCountry) {
    if (typeof zCountry === "string") {
      return zCountry.substring(0, 2).toUpperCase();
    } else return "Something wrong";
  };

  function fullDetails() {
    return `${name(zName)}, ${age(zAge)}, ${country(zCountry)}.`;
  }
  return fullDetails();
}

console.log(getDetails("Osama Mohammed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
console.log("#".repeat(20));



// //TODO:Q2
/*
function itsMe() {
return `Iam A Normal Function`;
}
*/

let print = () => `Iam A Normal Function`;
console.log(print());
// Iam A Normal Function

/*
function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}
*/

let url = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(url("https", "elzero", "org"));
// https://www.elzero.org

