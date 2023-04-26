class dictionaryOrMap {
  constructor() {
    this.element = {};
  }

  //methods go here
  has = (key) => key in this.element;

  set = (key, value) => {
    this.element[key] = value;
  };

  remove = (key) => {
    if (this.has(key)) {
      delete this.element[key];
      return true;
    }
    return false;
  };

  get = (key) => this.element[key];

  clear = () => (this.element = {});

  size = () => Object.keys(this.element).length;

  keys = () => Object.keys(this.element);

  values = () => Object.values(this.element);

  entries = () => Object.entries(this.element);
}

const myDictionary = new dictionaryOrMap();

myDictionary.set("a", ["about", "array"]);
myDictionary.set("b", ["bob", "bill"]);
myDictionary.set("c", ["Cindy", "Cute"]);
console.log(myDictionary.size());
console.log(Array.isArray(myDictionary.get("a")));

const words = [
  "about",
  "array",
  "extra",
  "dog",
  "bill",
  "bob",
  "Cindy",
  "Cute",
];
const setup = (words) =>
  words.reduce((dictionary, word) => {
    dictionary[word[0]]
      ? dictionary[word[0]].push(word)
      : (dictionary[word[0]] = [word]);
    return dictionary;
  }, {});

const isInDictionary = (dictionary, word) =>
  dictionary[word[0]]?.find((w) => word === w);
const dictionary = setup(words);
if (isInDictionary(dictionary, "oops")) {
  console.log("yes");
} else {
  console.log("no");
}

// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
const arr = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
  // Write your code here
  const dictionary = arr.reduce((map, number) => {
    let sign = "0";

    if (number < 0) {
      sign = "-";
    } else if (number > 0) {
      sign = "+";
    }
    map[sign] ? map[sign].push(number) : (map[sign] = [number]);
    return map;
  }, {});
  const ratioForNeg =
    (dictionary["-"] ? dictionary["-"].length : 0) / arr.length;
  const ratioForPos =
    (dictionary["+"] ? dictionary["+"].length : 0) / arr.length;
  const ratioForZero =
    (dictionary["0"] ? dictionary["0"].length : 0) / arr.length;
  console.log(ratioForNeg);
  console.log(ratioForPos);
  console.log(ratioForZero);
}
plusMinus(arr);
// function main() {
//     const n = parseInt(readLine().trim(), 10);

//     const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

//     plusMinus(arr);
// }
