/*
  Promise And XHR 
  XHR: is XML Http Request
*/

const getData = (apiLink) => {
    return new Promise((resolve, reject) => {
      let myRequest = new XMLHttpRequest();
      myRequest.onload = function () { //onload is async function
        if (this.readyState === 4 && this.status === 200) {
          resolve(JSON.parse(this.responseText)); //conver json obj to js obj.
        } else {
          reject(Error("No Data Found"));
        }
      };
  
      myRequest.open("GET", apiLink);
      myRequest.send();
    });
  };
  
  getData("https://api.github.com/users/elzerowebschool/repos")
    .then((result) => {
      result.length = 10;
      return result;
    })
    .then((result) => console.log(result[0].name))
    .catch((rej) => console.log(rej));