//global variables
var a = 10;
console.log(window.a); // 10

let b = 20;
console.log(window.b); // undefined

//JavaScript let and callback function in a for loop
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
//ES5
for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
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
