class Dictionary {
  constructor(wordArray) {
    const wordMap = wordArray.reduce((acc, word) => {
      acc[word] = true;

      word.split("").forEach((letter, i) => {
        const start = word.slice(0, i);
        const end = word.slice(i + 1);
        const partialWord = `${start}*${end}`;
        acc[partialWord] = true;
      });

      return acc;
    }, {});
    this.dict = wordMap;
  }

  isInDictionary(word) {
    return !!this.dict[word];
  }
}

const test = new Dictionary(["cat", "car", "bar", "ablative"]);

console.log(test.isInDictionary("cat"));
console.log(test.isInDictionary("*at"));
console.log(test.isInDictionary("*a*"));
console.log(test.isInDictionary("don"));
console.log(test.isInDictionary("do*"));
