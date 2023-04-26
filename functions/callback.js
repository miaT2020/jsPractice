//a synchronous callback,
// function greeting(name) {
//   alert(`Hello, ${name}`);
// }

// function processUserInput(callback) {
//   const name = prompt("Please enter your name.");
//   callback(name);
// }

// processUserInput((name) => alert(`hello, ${name}`));

// const arr = [1, 2, 3];
// const doubler = (x) => x * 2;
// const doubled = arr.map(doubler);

// //#asynchronous callback
const addButton = document.querySelector("#add");
addButton.addEventListener("click", () => {
  console.log("You clicked #rtraddButton");
});
