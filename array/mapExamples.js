//arr.map(function(element, index, array){  }, this);
let arr1 = [2, 3, 5, 7];

const newArray = arr1.map(function (element, index, array) {
  console.log(`current element: ${element}`);
  console.log(`current index: ${index}`);
  console.log(`current array: ${array}`);
  console.log(this);
  return element;
}, 80);

console.log("new array: " + newArray);
console.log("is new array same as arr1: " + (newArray === arr1));

let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function (element) {
  return element * 3;
});

console.log(modifiedArr); // [9, 12, 15, 18]

let users = [
  { firstName: "Susan", lastName: "Steward" },
  { firstName: "Daniel", lastName: "Longbottom" },
  { firstName: "Jacob", lastName: "Black" },
];

let userFullnames = users.map(function (element) {
  return `${element.firstName} ${element.lastName}`;
});

console.log(userFullnames);
// ["Susan Steward", "Daniel Longbottom", "Jacob Black"]

let optionItems = users.map(function (element, index) {
  return { id: index + 1, label: `${element.firstName}  ${element.lastName}` };
});

console.log(optionItems);
