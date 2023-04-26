//https://swastikyadav.com/how-javascript-works-behind-the-scene-execution-context-and-call-stack

// var: var is allocated memory in global scope or
// in it’s function  scope
//  and is initialized with undefined.
var x = 42;
var y = 21;
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

// let and const: let and const are allocated memory
// in TDZ (Temporal Dead Zone), hence is not accessible or
// defined while the variable is in TDZ.
// It remains in TDZ unless assigned a value (initialized).
let sum = add(42, 21); // 68
const product = multiply(24, 20); // 480
var sumProduct = multiply(add(x, y), 0);
console.log(sum, product, sumProduct);

// /https://dev.to/swastikyadav/understanding-callback-functions-and-closures-in-javascript-154l
function getFunc() {
  let value = "test";
  console.log(value);
  let func = new Function("value", "alert(value)");
  return func;
}

getFunc()(); // call function -> value Undefined
