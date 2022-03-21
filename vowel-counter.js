/*
Write a function that takes n words as input and returns a sentence in 
which these words are sorted by the number of vowels.
What is the complexity of your solution?
*/

const countVowel = (word) => {
  return word.match(/[aeiou]/gi).length;
};

const getNumofVowels = (text) => {
  return text.split(" ").map((word) => countVowel(word));
};

let text = `JavaScript often abbreviated programming language`;
let sentence = getNumofVowels(text);
console.log(sentence);

// let word = "word";
// let result = countVowel(word);
// console.log(result === 1);

// word = "COULD";
// result = countVowel(word);
// console.log(result === 2);

// word = "Alexis";
// result = countVowel(word);
// console.log(result === 3);

// let names = ["Ben", "April", "Zaber", "Alexis", "McJagger", "J.J.", "Madonna"];
// console.log(names.join(" "));
