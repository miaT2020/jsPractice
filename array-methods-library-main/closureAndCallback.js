//closure
function outerFunction() {
  const outerVariable = "Hello, ";

  function innerFunction(name) {
    console.log(outerVariable + name);
  }

  return innerFunction;
}

const greet = outerFunction(); //return innerFunction

greet("John"); // logs "Hello, John"  //innerFunction("John")
greet("Jane"); // logs "Hello, Jane"

//setTimeout() function in JavaScript:

function greeting(name) {
  console.log(`Hello, ${name}!`);
}

setTimeout(greeting, 3000, "John");

//or with arrow function:
setTimeout((name) => console.log(`arrow Hello, ${name}`), 3000);

//addEventListener()
const button = document.querySelector("button");

function handleClick() {
  console.log("Button clicked!");
}

button.addEventListener("click", handleClick);

//arrow function
button.addEventListener("click", (event) => {
  console.log("event.target.textContent: button click");
});

//map()

const numbers = [1, 2, 3, 4, 5];

function double(num) {
  return num * 2;
}

const doubledNumbers = numbers.map(double);
console.log(doubledNumbers);

const squaredNumbers = numbers.map((num) => num * num);

//asynchronous
function fetchData(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
}

function displayData(data) {
  console.log(data);
}

fetchData("https://jsonplaceholder.typicode.com/todos/2", displayData);

function watchTutorialCallback(callback, errorCallback) {
  const userLeft = false;
  const userWatchingCatMeme = false;
  if (userLeft) {
    errorCallback({
      name: "User Left  ",
      message: "from errorCallback :(",
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "User Watching Cat Meme",
      message: "from errorCallback WebDevSimplified < Cat",
    });
  } else {
    callback("form success callback: Thumbs up and Subscribe");
  }
}

watchTutorialCallback(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);

function watchTutorialPromise() {
  let userLeft = false;
  let userWatchingCatMeme = false;
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "WebDevSimplified < Cat",
      });
    } else {
      resolve("promise: Thumbs up and Subscribe");
    }
  });
}

watchTutorialPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });
