//reduce((accumulator, currentValue, currentIndex, array) => { /* … */ }, initialValue)
let arr1 = [2, 3, 5, 7];

const value = arr1.reduce((accumulator, currentValue, currentIndex, array) => {
  console.log(`accumulator: ${accumulator}`);
  console.log(`currentValue: ${currentValue}`);
  console.log(`currentIndex: ${currentIndex}`);
  console.log(`current array: ${array}`);

  return accumulator + currentValue;
}, 80);

console.log(value);

//flatten the array, convert [[1, 2], [3, 4], [5, 6]] to [1,2,3,4,5,6]
const flattened = [
  [1, 2],
  [3, 4],
  [5, 6],
].reduce((acc, curVal) => acc.concat(curVal), []);

console.log(flattened);

//flatten the array of objects,
//convert { Item: "A", Quantity : 2,}, { Item: "B", Quantity : 7,}, { Item: "C", Quantity : 10,}
// to // A : 2, B : 7, C : 10,

const arrObject = [
  { Item: "A", Quantity: 2 },
  { Item: "B", Quantity: 7 },
  { Item: "C", Quantity: 10 },
];
const flattenObj = arrObject.reduce(
  (acc, curVal) => `${acc} ${curVal.Item} : ${curVal.Quantity},`,
  ""
);

let shoppingCart = [
  {
    product: "phone",
    qty: 1,
    price: 500,
  },
  {
    product: "Screen Protector",
    qty: 1,
    price: 10,
  },
  {
    product: "Memory Card",
    qty: 2,
    price: 20,
  },
];

let total = shoppingCart.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue.qty * currentValue.price;
}, 0);

console.log(`total: ${total}`);

//caculation of sum
const numbers = [1, 2, 3, 4, 5, 6];

let sum = numbers.reduce((previousValue, currentValue) => {
  console.log({ previousValue, currentValue });
  return previousValue + currentValue;
});

console.log(`reduce Result:${sum}`);

sum = numbers.reduceRight(function (previousValue, currentValue) {
  console.log({ previousValue, currentValue });
  return previousValue + currentValue;
});

console.log(`reduceRight Result:${sum}`);

//combination of using array methods
// Get the names of the wizards in Hufflepuff
const wizards = [
  {
    name: "Harry Potter",
    house: "Gryfindor",
  },
  {
    name: "Cedric Diggory",
    house: "Hufflepuff",
  },
  {
    name: "Tonks",
    house: "Hufflepuff",
  },
  {
    name: "Ronald Weasley",
    house: "Gryfindor",
  },
  {
    name: "Hermione Granger",
    house: "Gryfindor",
  },
];

let hufflepuff = wizards
  .filter(function (wizard) {
    return wizard.house === "Hufflepuff";
  })
  .map(function (wizard) {
    return wizard.name;
  });

console.log(`get hufflepuff from filter and map: ${hufflepuff}`);

hufflepuff = wizards.reduce(function (newArr, wizard) {
  if (wizard.house === "Hufflepuff") {
    newArr.push(wizard.name);
  }
  return newArr;
}, []);

console.log(`get hufflepuff from reduce: ${hufflepuff}`);

const points = {
  HarryPotter: 500,
  CedricDiggory: 750,
  RonaldWeasley: 100,
  HermioneGranger: 1270,
};

var wizardsWithPoints = wizards.reduce(function (arr, wizard) {
  // Get the key for the points object by removing spaces from the wizard's name
  var key = wizard.name.replace(" ", "");

  // If the wizard has points, add them
  // Otherwise, set them to 0
  if (points[key]) {
    wizard.points = points[key];
  } else {
    wizard.points = 0;
  }

  console.log(`with points: ${wizard}`);

  // Push the wizard object to the new array
  arr.push(wizard);

  // Return the array
  return arr;
}, []);

//Transform an Array into an Object

const posts = [
  { id: 1, category: "frontend", title: "All About That Sass" },
  { id: 2, category: "backend", title: "Beam me up, Scotty: Apache Beam tips" },
  {
    id: 3,
    category: "frontend",
    title: "Sanitizing HTML: Going antibactirial on XSS attacks",
  },
]; //change it to
// {
//   frontend: [1, 3],
//   backend: [2]
// }

const categoryPosts = posts.reduce((acc, post) => {
  let { id, category } = post;
  return { ...acc, [category]: [...(acc[category] || []), id] };
}, {});
