function sum1(...args) {
  let total = 0;
  for (const a of args) {
    total += a;
  }
  return total;
}

console.log(sum1(1, 2, 3));

function sum2(...args) {
  return args
    .filter(function (e) {
      return typeof e === "number";
    })
    .reduce(function (prev, curr) {
      return prev + curr;
    });
}

const result = sum2(10, "Hi", null, undefined, 20);
console.log(result);

function filterBy(type, ...args) {
  return args.filter(function (e) {
    return typeof e === type;
  });
}

//if no rest, it has to pass through object
//Therefore, you cannot use the filter()
//in ES5, you have to use Array.prototype.filter.call()
// call(): This method is used to invoke
// a function with a specific this value and any number of arguments passed individually.
//The first argument is the value that this should be set to, and subsequent arguments
//are passed to the function as individual parameters.
function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person = { name: "John" };
greet.call(person, "Jane");
// Output: Hello, Jane! My name is John.

function sum3(arguments) {
  return Array.prototype.filter
    .call(arguments, function (e) {
      return typeof e === "number";
    })
    .reduce(function (prev, curr) {
      return prev + curr;
    });
}

result = sum3({ 1: 10, 2: "Hi", 3: null, 5: undefined, 6: 20 });
console.log(`call() result = ${result}`);

//An arrow function does not have the arguments object
const combine = (...args) => {
  return args.reduce(function (prev, curr) {
    return prev + " " + curr;
  });
};

let message = combine("JavaScript", "Rest", "Parameters"); // =>
console.log(`message' ' ${message}`); // JavaScript Rest Parameters

//apply the function
// apply(thisArg)
// apply(thisArg, argsArray)
function sayHello(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

const person1 = { name: "John" };

sayHello.apply(person1, ["Hello", "!"]); // Output: Hello John!

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2

const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

//same as above
const array1 = ["a", "b"];
const elements1 = [0, 1, 2];
array.push(...elements1);
console.info(array); // ["a", "b", 0, 1, 2]

//Using apply() and built-in functions
// min/max number in an array
const numbers1 = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
let max1 = Math.max.apply(null, numbers1);
// This about equal to Math.max(numbers[0], …)
// or Math.max(5, 6, …)

let min1 = Math.min.apply(null, numbers1);

// vs. simple loop based algorithm
max1 = -Infinity;
min1 = +Infinity;

function minOfArray(arr) {
  let min = Infinity;
  const QUANTUM = 32768;

  for (let i = 0; i < arr.length; i += QUANTUM) {
    const submin = Math.min.apply(
      null,
      arr.slice(i, Math.min(i + QUANTUM, arr.length))
    );
    min = Math.min(submin, min);
  }

  return min;
}

const minNumber = minOfArray([5, 6, 2, 3, 7]);
