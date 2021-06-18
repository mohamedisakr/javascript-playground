const data = require("./airports-data");
const forEach = require("./foreach-function");
// Implement map function which takes 2 arguments
// 1. list -> array
// 2. callback function

const map = (list, callback) => {
  if (!Array.isArray(list)) {
    throw new TypeError(`list should be an array.`);
  }
  return iterateArray(list, callback);
};

const iterateArray = (list, callback) => {
  const arr = [];
  forEach(list, (val, i, list) => {
    arr.push(callback(val, i, list));
  });
  return arr;
};

module.exports = map;

// test cases

// times 2
// let numbers = [1, 4, 9];
// let doubles = map(numbers, (item, i, numbers) => {
//   return item * 2;
// });
// console.log(doubles);

// times 3
// let numbers = [1, 4, 9];
// let tribles = map(numbers, (item, i, numbers) => {
//   return item * 3;
// });
// console.log(tribles);

// squares
// let numbers = [1, 2, 3, 4, 5];
// let squares = map(numbers, (item, i, numbers) => {
//   return item * item;
// });
// console.log(squares);

// try to pass object
// const obj = {
//   id: "YCB",
//   type: "airport",
//   attributes: {
//     name: "Cambridge Bay Airport",
//     city: "Cambridge Bay",
//     country: "Canada",
//     iata: "YCB",
//     icao: "CYCB",
//     latitude: "69.108101",
//     longitude: "-105.138",
//     altitude: 90,
//     timezone: "America/Edmonton",
//   },
// };

// let notArray = map(obj, (item, i, obj) => {
//   try {
//     return item * item;
//   } catch (e) {
//     console.error(e);
//   }
// });
// console.log(notArray);
