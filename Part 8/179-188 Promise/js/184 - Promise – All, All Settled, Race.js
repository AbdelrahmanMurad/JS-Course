/*
  Promise
  - all (array of promises)
  - allSettled (array of promises) تسوية
       -- all() VS allSettled()
        - all(): in first reject, display the reject fn, the promise stops.
        - allSettled(): it countinues and diplay all data (fns), never stops until it reach to the end. 
  - race (just one promise) يظهر له سواء فشل او نجح promiseيطبع اول 
*/

const myFirstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    // res("Iam The First Promise");
    rej("Iam The First Promise");
  }, 5000);
});

const mySecondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    // res("Iam The Second Promise");
    rej("Iam The Second Promise");
  }, 1000);
});

const myThirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The Third Promise");
    // rej("Iam The Third Promise");
  }, 2000);
});

//* all([promises])
// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

//* allSettled([promises])
// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

//* race()
Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);