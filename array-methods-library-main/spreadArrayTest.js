const array = ["A", "B", "C", "D", "E"];
const array2 = ["E", "F", "G", "G", "N"];

const n = array.concat(array2);
array2;
n;
const person = {
  name: "Ming",
  favoriteFood: ["rice", "stirfly"],
};
const date = new Date();

array2.concat(array);
array.concat(["E", "F", "G", "G", "N"]);
const [first, second, ...rest] = array;

console.log(first);
// A
console.log(second);
// B
console.log(rest);
// ['C', 'D', 'E']

array.forEach((n) => {
  console.log(n);
});
