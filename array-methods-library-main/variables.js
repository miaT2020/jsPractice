//global variables
var a = 10;
console.log(window.a); // 10

let b = 20;
console.log(window.b); // undefined

//JavaScript let and callback function in a for loop
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log("var " + i);
  }, 1000);
}
//ES5
for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log("Es5" + j);
    }, 1000);
  })(i);
}

// In ES6, the let keyword declares a new variable
// in each loop iteration. Therefore, you just need to replace the var keyword with the let keyword to fix the issue:
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log("es6 " + i);
  }, 1000);
}

//ES6 arrow function
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(`arror function ${i}`), 1000);
}

//Hoisting
function example() {
  console.log(a); // undefined can be hoisted

  //console.log(b); // ReferenceError: b is not defined, cannot be hoisted

  var a = 1;
  let b = 2;

  //scope: var is function scope, let is block scope
  for (var i = 0; i < 5; i++) {
    console.log("Inside the loop:", i);
  }

  console.log("Outside the loop:", i); //Outside the loop: 5

  for (let j = 0; j < 5; j++) {
    console.log("Inside the loop:", j);
  }

  //console.log("Outside the loop:", j);
  //Uncaught ReferenceError: j is not defined
}
example();

var counter = 0;
console.log(window.counter); //  0

//let counter = 0;
//console.log(window.counter); // undefined
// cannot access the counter variable here

const name = "John Doe";
//name = "Jane"; // no reassignTypeError: Assignment to constant variable.

//const object
const person = { age: 20 };
person.age = 30; // OK
console.log(person.age); // 30
//person = { age: 40 }; // TypeError

// value of the person object to be immutable
const person1 = Object.freeze({ age: 20 });
//person1.age = 30; // TypeError

const company = Object.freeze({
  name: "ABC corp",
  address: {
    //is not immutable
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    zipcode: 95134,
  },
});

company.address.street = "North 2nd street"; // OK

//array
const colors = ["red"];
colors.push("green");
console.log(colors); // ["red", "green"]

colors.pop();
colors.pop();
console.log(colors); // []
//colors = []; // TypeError,can't not reassign to another array

//for loop
let scores = [75, 80, 95];

for (let score of scores) {
  console.log(score);
}
//creates a new binding for the const keyword in each loop iteration. In other words,
//a new score constant is created in each iteration.
for (const score of scores) {
  console.log(score);
}
//const will not work in an imperative for loop.
// for (const i = 0; i < scores.length; i++) { // TypeError
//   console.log(scores[i]);
// }

//enter new scope, TDZ starts
// let log = function () {
//   console.log(message); // messagedeclared later
// };

// // This is the TDZ and accessing log
// // would cause a ReferenceError

// let message = "Hello"; // TDZ ends
// log(); // called outside TDZ

// console.log(typeof myVar); // undefined
// console.log(typeof message1); // ReferenceError
// let message1; // TDZ ends
