function print(value) {
  console.log(value);
}

function useCallback(callback) {
  callback("hello ming");
}
// console.dir(print);

// print("Hello Ming");

// useCallback(print);

// const callback = print;
// callback("hello ming");

//this is wrong this is not a function
//invoke print() with value undefined
//after executing print() get undefined return value
//the useCallback(undefined), undefined("hello") is the callback that
//is not a function

//useCallback(print());

// function printPerson(person) {
//   console.log(person);
// }
// const person = { name: "Ming", age: 18 };
// printPerson(person); //person.name is different from person.

useCallback((value) => console.log(value));

if (typeof null === "object") {
  console.log("it is object");
} else {
  console.log("it is not object");
}
