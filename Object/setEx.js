//let setObject = new Set(iterableObject);
// let setObject = new Set();

// add(value) – appends a new element with a specified value to the set. It returns the Set object, therefore, you can chain this method with another Set method.
// clear()  – removes all elements from the Set object.
// delete(value) – deletes an element specified by the value.
// entries()– returns a new Iterator that contains an array of  [value, value] .
// forEach(callback [, thisArg]) – invokes a callback on each element of the Set with the this value sets to thisArg in each call.
// has(value) – returns true if an element with a given value is in the set, or false if it is not.
// keys() – is the same as values() function.
// [@@iterator] – returns a new Iterator object that contains values of all elements stored in the insertion order.

//All elements in the set must be unique therefore the  chars only contains 3 distinct elements a, b and c.

let chars = new Set(["a", "a", "b", "c", "c"]);

console.log(chars); //Set { 'a', 'b', 'c' }

console.log(typeof chars); //object

let result = chars instanceof Set;
console.log(result);
