// What are lambda or arrow functions
// An arrow function is a shorter syntax for
// a function expression and does not have its own this, arguments, super, or new.target. These functions are best suited for non-method functions,
// and they cannot be used as constructors.

// const breakfast = () => "Cinnamon Toast crunch";

// console.log(breakfast());

// const lunch = () => "Chiptle";

// console.log(lunch());

// const dinner = () => {
//   return "Hot pot";
// };
// console.log(dinner());

// const dinner1 = () => {
//   "Hot pot";
// };
// console.log(dinner1()); //undifine

// let sum = (a, b) => a + b;
// console.log(sum(6, 8));

// sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(6, 8));

// function sum(a, b) {
//   return a + b;
// }

//const sum1 = (a, b) => a + b;

// function isPositive(num) {
//   return num >= 0;
// }

// const isPositive1 = (num) => num >= 0;

// function randomNumber() {
//   return Math.random;
// }

// const randomNumber = (num) => Math.random;

// document.addEventListener("click", function () {
//   console.log("click");
// });

const applyOperation = (x) => x * x;
console.log(applyOperation(4));
