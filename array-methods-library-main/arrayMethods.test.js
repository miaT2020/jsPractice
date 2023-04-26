//const { forEach } = require("./arrayMethods");
const {
  forEach,
  map,
  filter,
  // reduce,
  // some,
  // every,
  // flat,
  // find,
} = require("./arrayMethods.js");

test("forEach", () => {
  // const func = jest.fn();
  // const stringArray = ["a", "b", "c"];
  // forEach(stringArray, func);

  // expect(func).toHaveBeenNthCalledWith(3, "c", 2, stringArray);

  const func = jest.fn();
  const startingArray = ["a", "b", "c", "p"];
  forEach(startingArray, func);

  expect(func).toHaveBeenNthCalledWith(3, "c", 2, startingArray);
  expect(func).toHaveBeenCalledTimes(4);
});

test("map", () => {
  const func = jest.fn((elem, index) =>
    typeof elem === "string" ? elem + index : elem * index
  );
  const startingArray = ["aw", "6b", "rc", "yp", "ss"];
  let newArray = map(startingArray, func);

  expect(newArray).toEqual(["aw0", "6b1", "rc2", "yp3", "ss4"]);
  expect(func).toHaveBeenCalledTimes(5);
  expect(func).toHaveBeenNthCalledWith(1, "aw", 0, startingArray);

  const numberArray = [1, 2, 3, 4, 5];
  newArray = map(numberArray, func);
  expect(newArray).toEqual([0, 2, 6, 12, 20]);
});

test("filter", () => {
  const func = jest.fn((elem, index) => {
    if (typeof elem === "object") return { id: index, label: index };
  });

  const startingArray = [
    { id: 0, label: "aw" },
    89,
    { id: 1, label: "6b" },
    { id: 2, label: "rc" },
    { id: 3, label: "yp" },
    100,
  ];

  const newArray = filter(startingArray, func);

  expect(newArray).toEqual([
    { id: 0, label: 0 },
    { id: 1, label: 1 },
    { id: 2, label: 2 },
    { id: 3, label: 3 },
  ]);
});
