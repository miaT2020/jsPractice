const cloneArray = require("./cloneArray");

test("test clone array", () => {
  const myArray = [7, 6, 7, 4];
  expect(cloneArray(myArray)).toEqual(myArray);
  //make sure make clone of myArray, but a new array
  expect(cloneArray(myArray)).not.toBe(myArray);
});
