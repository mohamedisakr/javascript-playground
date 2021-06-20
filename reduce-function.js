// https://slides.com/bgando/f2f-final-day-2#/1/10

// /*
const sumReducer = (accumulator, currentValue, index, array) => {
  return accumulator + currentValue;
};

const diffReducer = (accumulator, currentValue, index, array) => {
  return accumulator - currentValue;
};

const maxReducer = (accumulator, currentValue, index, array) => {
  return Math.max(accumulator, currentValue);
};

const reduce = (collection, callback, accumulator = 0) => {
  let result = accumulator;
  for (let i = 0; i < collection.length; i++) {
    result = callback(collection[i], result); //collection[i]; //
  }
  return result;
};

module.exports = reduce;

const coll = [1, 2, 3];

const result = reduce(coll, sumReducer, 10);
console.log(result);
// */

/*
const coll = [1, 2, 3];
const sum = (a, b) => {
  return a + b;
};

const diff = (a, b) => {
  return a - b;
};

const total = coll.reduce(diff, 0);
console.log(total);
// */

/*
const votes = [
  "angular",
  "angular",
  "react",
  "react",
  "react",
  "angular",
  "ember",
  "react",
  "vanilla",
];

const reducer = (tally, vote) => {
  if (tally[vote]) {
    tally[vote] = tally[vote] + 1;
  } else {
    tally[vote] = 1;
  }
  return tally;
};

const total = votes.reduce(reducer, {});
console.log(total);
*/
