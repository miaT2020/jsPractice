//setTimeout

// setTimeout(() => {
//   console.log("hi (1000");
// }, 1000);

// function printHi() {
//   console.log("Hi");
// }

// function printHiClosure() {
//   return () => console.log("hi");
// }

function print(value) {
  console.log(value);
  return value;
}

// console.dir(printHiClosure);
// console.dir(print);

//printCallback(() => console.log("hi "));

// // printHi();

// setTimeout(printHiClosure(), 1000);
// function useCallback(callback) {
//   callback("hello ming");
// }

// useCallback(printHiClosure());
// useCallback(print);

function printHi() {
  console.log("printHi");
}

function useCallback1(callback, value) {
  callback(value);
}

useCallback1(printHi);
useCallback1(print, "hello, print");

// printHi();
// //assing the
// const useCallback = (value) => console.log(value);
// useCallback("ming");
