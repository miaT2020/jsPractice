// // Promises are the foundation of asynchronous programming
// // in modern JavaScript.
// // A promise is an object returned by an asynchronous function,
// // which represents the current state of the operation.
// // At the time the promise is returned to the caller,
// // the operation often isn't finished, but the
// // promise object provides methods to handle the eventual
// // success or failure of the operation.

// // With a promise-based API, the asynchronous function
// // starts the operation and returns a Promise object.
// // You can then attach handlers to this promise object,
// // and these handlers will be executed when the operation
// // has succeeded or failed.

// //Using the fetch() API

// const fetchPromise1 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// console.log(fetchPromise1);

// fetchPromise1.then((response) => {
//   console.log(`Received response: ${response.status}`);
// });

// console.log("Started request…");

// //nested promises is not good idea
// const fetchPromise2 = fetch("https://jsonplaceholder.typicode.com/users");

// fetchPromise2.then((response) => {
//   const jsonPromise = response.json(); //json() is also asynchronous.
//   jsonPromise.then((data) => {
//     console.log(data[0].name);
//   });
// });

// // //Using Chaining promises
// // // Instead of calling the second then()
// // // inside the handler for the first then(),
// // // we can return the promise returned by json(),
// // // and call the second then() on that return value.
// // // This is called promise chaining and means we can avoid
// // // ever-increasing levels of indentation when
// // // we need to make consecutive asynchronous function calls.

// const fetchPromise3 = fetch("https://jsonplaceholder.typicode.com/users");

// fetchPromise3
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data[0].name);
//   });

// // //checking the status code in the response
// // //and throwing an error if it wasn't "OK":

// const fetchPromise4 = fetch("https://jsonplaceholder.typicode.com/users");

// fetchPromise4
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0].name);
//   });

// //Catching errors

// const fetchPromise5 = fetch("bad-scheme://jsonplaceholder.typicode.com/users");

// fetchPromise5
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0].name);
//   })
//   .catch((error) => {
//     console.error(`Could not get users: ${error}`);
//   });

// // Combining multiple promises
// // example: we're making three fetch() requests to three different URLs.

const fetchPromise6 = fetch("https://jsonplaceholder.typicode.com/users");
const fetchPromise7 = fetch("https://jsonplaceholder.typicode.com/todos");
const fetchPromise8 = fetch("https://jsonplaceholder.typicode.com/comments");

Promise.all([fetchPromise6, fetchPromise7, fetchPromise8])
  .then((responses) => {
    const data = [];
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
      data.push(response.json());
    }
    return data;
  })
  .then((allData) => {
    for (const result of allData) {
      result.then((data) => {
        console.log(`${JSON.stringify(data)}`);
      });
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });

// //If we try the same code with a badly formed URL, like this:
// //Then we can expect the catch() handler to run

// const fetchPromise9 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );
// const fetchPromise10 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
// );
// const fetchPromise11 = fetch(
//   "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
// );

// Promise.all([fetchPromise9, fetchPromise10, fetchPromise11])
//   .then((responses) => {
//     for (const response of responses) {
//       console.log(`${response.url}: ${response.status}`);
//     }
//   })
//   .catch((error) => {
//     console.error(`Failed to fetch: ${error}`);
//   });

// //Promise.any
// // need any one of a set of promises to be fulfilled,
// //and don't care which one. In that case, you want
// //Promise.any(). This is like Promise.all(), except that
// //it is fulfilled as soon as any of the array

// const fetchPromise12 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );
// const fetchPromise13 = fetch("https://jsonplaceholder.typicode.com/todos");
// const fetchPromise14 = fetch("https://jsonplaceholder.typicode.com/users");

// Promise.any([fetchPromise12, fetchPromise13, fetchPromise14])
//   .then((response) => {
//     console.log(`${response.url}: ${response.status}`);
//   })
//   .catch((error) => {
//     console.error(`Failed to fetch: ${error}`);
//   });

//async and await
// instead of getting a Promise, our caller gets back a fully complete Response object,
//just as if fetch() were a synchronous function!
// We can even use a try...catch block for error handling,
// exactly as we would if the code were synchronous.

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchUsers();
//console.log(promise[0].name); // "promise" is a Promise object, so this will not work

//instead
promise.then((data) => console.log(data[0].name));
