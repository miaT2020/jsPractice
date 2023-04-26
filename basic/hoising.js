// When the JavaScript engine executes the JavaScript code, it creates the global execution context. The global execution context has two phases:

// 1. Creation
// 2. Execution
// During the creation phase, the JavaScript engine moves
//the variable and function declarations to the top of your code. This is known as hoisting in JavaScript.

// The creation phase
// When the JavaScript engine executes a script for the first time, it creates the global execution context. During this phase, the JavaScript engine performs the following tasks:

// Create the global object i.e., window in the web browser or global in Node.js.
// Create the this object and bind it to the global object.
// Setup a memory heap for storing variables and function references.
// Store the function declarations in the memory heap and variables within the global execution context with the initial values as undefined.
//https://www.javascripttutorial.net/es-next/javascript-globalthis/
//https://www.javascripttutorial.net/javascript-execution-context/

let x = 10;

function timesTen(a) {
  return a * 10;
}

let y = timesTen(x);

console.log(y); // 100

//---------------------The error message explains that the counter variable is already in the heap memory. However, it hasn’t been initialized.
//console.log(counter); //"ReferenceError: Cannot access 'counter' before initialization
let counter = 1;

//Function hoisting
//Like variables, the JavaScript engine also hoists the function declarations. This means that the JavaScript engine
//also moves the function declarations to the top of the script
let x2 = 20,
  y2 = 10;

let result = add(x2, y2);
console.log(result); // 👉 30

function add(a, b) {
  return a + b;
}

//Function expressions:  changes the add from a regular function to a function expression:
let x3 = 20,
  y3 = 10;

// let result = add(x,y); // ❌ Uncaught ReferenceError: add is not defined
// console.log(result);

let add = function (x, y) {
  //Function expressions
  return x + y;
};
