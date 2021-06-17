const data = require("./airports-data");
// Implement map function which takes 2 arguments
// 1. list -> array
// 2. callback function

const map = (list, callback) => {
  // array
  if (!Array.isArray(list)) {
    throw new TypeError(`list should be an array.`);
  }
  return iterateArray(list, callback);
};

const iterateArray = (list, callback) => {
  const arr = [];
  for (let i = 0; i < list.length; i++) {
    arr.push(callback(list[i], i, list));
  }
  return arr;
};

// test cases

// times 2
// let numbers = [1, 4, 9];
// let doubles = map(numbers, (item, i, data) => {
//   return item * 2;
// });
// console.log(doubles);

// times 3
// let numbers = [1, 4, 9];
// let tribles = map(numbers, (item, i, data) => {
//   return item * 3;
// });
// console.log(tribles);

// squares
let numbers = [1, 2, 3, 4, 5];
let squares = map(numbers, (item, i, data) => {
  return item * item;
});
console.log(squares);

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
