// Create an array of words
const words = ["apple", "banana", "orange", "pear", "peach", "grape"];

// Create an empty dictionary object
const dict = {};

// Loop through the words array and add each word to the dictionary
for (let i = 0; i < words.length; i++) {
  dict[words[i]] = true;
}

// Define a function to search for a word with a wildcard
function searchWithWildcard(str) {
  const pattern = new RegExp("^" + str.replace(/\*/g, ".*") + "$");
  return Object.keys(dict).filter((key) => pattern.test(key));
}

// Test the searchWithWildcard function
console.log(searchWithWildcard("ap*")); // ['apple']
console.log(searchWithWildcard("*e")); // ['apple', 'orange', 'pear', 'peach', 'grape']
console.log(searchWithWildcard("*")); // ['apple', 'banana', 'orange', 'pear', 'peach', 'grape']
console.log(searchWithWildcard("")); // []
