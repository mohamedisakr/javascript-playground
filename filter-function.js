const data = require("./airports-data");
const forEach = require("./foreach-function");
// Implement filter function which takes 2 arguments
// 1. list -> array
// 2. callback function

const filter = (list, callback) => {
  if (!Array.isArray(list)) {
    throw new TypeError(`list should be an array.`);
  }
  return iterateArray(list, callback);
};

const iterateArray = (list, callback) => {
  const arr = [];
  forEach(list, (val, i, list) => {
    if (callback(val)) {
      arr.push(val);
    }
  });
  return arr;
};

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// const result = filter(words, (word) => word.length > 6);
// console.log(result);

const nums = [12, 5, 8, 130, 44];
const result = filter(nums, (num) => num > 20);
console.log(result);
