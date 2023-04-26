// The var variables belong to the global scope
// when you define them outside a function

var counter1; //the counter is a global variable. It means that the counter variable is accessible by any functions.

function increase() {
  var counter = 10; //inside: local varaible
}

//i is a global
for (var i = 0; i < 5; i++) {
  console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);

for (let j = 0; j < 5; j++) {
  console.log("Inside the loop:", j);
}

console.log("Outside the loop:", j);

// #2: Creating global properties
// The global var variables are added to the global object as properties.

var globalcounter = 10;
console.log(window.globalcounter); //  10

//However, the let variables are not added to the global object:
let counterByLet = 0;
console.log(window.counter); // undefined

//#3 Redeclare
var globalcounter;
console.log(globalcounter); // 10

//let counterByLet; // error

//#4: The Temporal dead zone
//The let variables have temporal dead zones while the var
//In the creation phase, the JavaScript engine assigns storage spaces
//to the let variables but does not initialize the variables.
//Referencing uninitialized variables will cause a ReferenceError.
