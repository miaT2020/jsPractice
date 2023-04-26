let normalObj = {}; // create a normal object
let nullProtoObj = Object.create(null); // create an object with "null" prototype

console.log(`normalObj is: ${normalObj}`); // shows "normalObj is: [object Object]"
//console.log(`nullProtoObj is: ${nullProtoObj}`); // throws error: Cannot convert object to primitive value

console.log(normalObj); // shows [object Object]
//alert(nullProtoObj); // throws error: Cannot convert object to primitive value

normalObj.valueOf(); // shows {}
//nullProtoObj.valueOf(); // throws error: nullProtoObj.valueOf is not a function

normalObj.hasOwnProperty("p"); // shows "true"
//nullProtoObj.hasOwnProperty("p"); // throws error: nullProtoObj.hasOwnProperty is not a function

normalObj.constructor; // shows "Object() { [native code] }"
nullProtoObj.constructor; // shows "undefined"

nullProtoObj.toString = Object.prototype.toString; // since new object lacks toString, add the original generic one back

console.log(nullProtoObj.toString()); // shows "[object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // shows "nullProtoObj is: [object Object]"

// In practice, objects with null prototype are usually used as a cheap substitute for maps.
// The presence of Object.prototype properties will cause some bugs:
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

function getAge(name) {
  return ages[name];
}

hasPerson("hasOwnProperty"); // true
getAge("toString"); // [Function: toString]

// Using a null-prototype object removes
// this hazard without introducing too much complexity to the hasPerson and getAge functions:
const ages1 = Object.create(null, {
  alice: { value: 18, enumerable: true },
  bob: { value: 27, enumerable: true },
});

hasPerson("hasOwnProperty"); // false
getAge("toString"); // undefined

//============Map =================
// Objects are similar to Maps in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Due to this reason, Objects have been used as Maps historically. But there are important differences that make using a Map preferable in certain cases.

// The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
// The keys in Map are ordered while keys added to Object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.
// You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
// A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
// An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.
// A Map may perform better in scenarios involving frequent addition and removal of key pairs.
let myMap = new Map();

let john = { name: "John Doe" },
  lily = { name: "Lily Bush" },
  peter = { name: "Peter Drucker" };

myMap.set(lily, "editor").set(peter, "subscriber");

//or let map = new Map([iterable]);
myMap = new Map([
  [john, "admin"],
  [lily, "editor"],
  [peter, "subscriber"],
]);
myMap.get(john); // admin

let foo = { name: "Foo" };
myMap.get(foo); //undefined

myMap.has(foo); // false
myMap.has(lily); // true

for (const user of myMap.keys()) {
  console.log(user.name);
}

for (let role of myMap.values()) {
  console.log(role);
}

for (const role of myMap.entries()) {
  console.log(`${role[0].name}: ${role[1]}`);
}

myMap.forEach((role, user) => console.log(`${user.name}: ${role}`));

let roles = [...myMap.values()];
console.log(roles); //[ 'admin', 'editor', 'subscriber' ]

// A WeakMap only has subset methods of a Map object:

//  get(key)
//  set(key, value)
//  has(key)
//  delete(key)
// Elements of a WeakMap cannot be iterated.
// Cannot clear all elements at once.
// Cannot check the size of a WeakMap.

const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 = {};
const o2 = function () {};
const o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // a value can be anything, including an object or a function
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // keys and values can be any objects. Even WeakMaps!

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, because there is no key for o2 on wm2
wm2.get(o3); // undefined, because that is the set value

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (even if the value itself is 'undefined')

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
