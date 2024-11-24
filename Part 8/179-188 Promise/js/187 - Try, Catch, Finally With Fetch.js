/*
  Async & Await With Try, Catch, Finally
*/

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Iam The Good Promise");
    // reject(Error("Iam The Bad Promise"));
  }, 3000);
});

//*1  
//  readData = async ()=>{
//   console.log("Before Promise");
//   try {
//     console.log(await myPromise);
//   }catch(reason) {
//     console.log(`Reason: ${reason}`);
//   }finally {
//     console.log("After Promise");
//   }
// }

//   readData();

//*2
async function fetchData() {
  console.log("Before Fetch");
  try {
    let myData = await fetch("https://api.github.com/users/elzerowebschool/repos");
    // console.log( myData.json());
    console.log(await myData.json());
  } catch (reason) {
    console.log(`Reason: ${reason}`);
  } finally {
    console.log("After Fetch");
  }
}

fetchData();