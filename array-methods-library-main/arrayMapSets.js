const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

const filterdItems = items.filter((item) => item.price <= 100);
const mappedItems = items.map((item, index) => {
  return { ...item, id: item.name + index, name: item.name };
});

const foundItem = items.find((item) => item.price === 100);

//no return value,
items.forEach((item) => {
  console.log(item.name);
});

//return true or false, check at least one item
const hasInexpensiveItems = items.some((item) => item.price <= 500);

//return true or false, check every single item falls under the criteria
const hasAllItems = items.every((item) => item.price <= 5000);

const total = items.reduce((total, item) => {
  return total + item.price;
}, 0);

//find item in a simple array
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const includeTwo = items.includes(2);

// console.log(items);
// console.log(hasAllItems);

//map takes an array of arrays so
const userMap = new Map([
  [1, { name: "John", age: 12 }],
  [2, { name: "Kevin", age: 21 }],
]);

userMap.set({ userId: 1 }, { name: "Jerry", age: 15 });

console.log(userMap.keys());

for (const userId of userMap.keys()) {
  console.log(userId);
}

let john = { name: "John Doe" },
  lily = { name: "Lily Bush" },
  peter = { name: "Peter Drucker" };

let userRoles = new Map([
  [john, "admin"],
  [lily, "editor"],
  [peter, "subscriber"],
]);

for (let role of userRoles.values()) {
  console.log(role);
}

for (const role of userRoles.entries()) {
  console.log(`${role[0].name}: ${role[1]}`);
}

//To make the iteration more natural, you can use destructuring as follows:
for (let [user, role] of userRoles.entries()) {
  console.log(`destructuring: ${user.name}: ${role}`);
}

//Convert map keys or values to a array
var keys = [...userRoles.keys()];
console.log(keys);
let roles = [...userRoles.values()];
console.log(roles);

userRoles.delete(john);
console.log(userRoles.size); //
userRoles.clear();
console.log(userRoles.size); // 0

// WeakMap
// A WeakMap is similar to a Map except the keys of a WeakMap
//must be objects. It means that when a reference to a key (an object) is out of scope, the corresponding value is automatically released from the memory.

// A WeakMap only has subset methods of a Map object:

//  get(key)
//  set(key, value)
//  has(key)
//  delete(key)
// Here are the main difference between a Map and a WeekMap:

// Elements of a WeakMap cannot be iterated.
// Cannot clear all elements at once.
// Cannot check the size of a WeakMap.

const numbers = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9];
const uniqueNumbers = new Set(numbers);
uniqueNumbers.console.log(uniqueNumbers);

//looping
let users = new Set();
users.add("admin").add("editor").add("subscriber");

for (let role of users) {
  console.log(role);
}

for (let [key, value] of users.entries()) {
  console.log(key === value);
}
//invoke callbacks
users.forEach((role) => console.log(role.toUpperCase()));

//WeakSets
// A WeakSet is similar to a Set except that it contains
// only objects. Since objects in a WeakSet
// may be automatically garbage-collected,
// a WeakSet does not have size property.
// Like a WeakMap, you cannot iterate elements of a WeakSet, therefore, you will find that WeakSet is rarely used in practice. In fact, you only use a WeakSet to check if a specified value is in the set.

let computer = { type: "laptop" };
let server = { type: "server" };
let equipment = new WeakSet([computer, server]);

if (equipment.has(server)) {
  console.log("We have a server");
}

//https://www.javascripttutorial.net/es6/javascript-set/
