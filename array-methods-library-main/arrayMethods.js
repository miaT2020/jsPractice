function forEach(array, cb) {
  for (let i = 0; i < array.length; i++) {
    cb(array[i], i, array);
  }
}

function map(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
}

function filter(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i], callback);
    }
  }
  return newArray;
}

// const func = (elem, index) =>
//   typeof elem === "number" ? elem * index : elem + index;
// const startingArray = ["aw", "6b", "rc", "yp", "ss"];
// const newArray = map(startingArray, func);
//console.log(newArray);
module.exports = {
  forEach,
  map,
  filter,
};
