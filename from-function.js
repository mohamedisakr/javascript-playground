const obj = {
  0: "a",
  1: "b",
  2: "c",
  3: "d",
};

// the easy way
// const from = (obj) => {
//   //   return Array.prototype.slice.call(obj);
//   return Array.from(obj);
// };

// the hard way
const from = (obj) => {
  const arr = [];
  for (const [key, value] of Object.entries(obj)) {
    arr.push(value);
  }
  return arr;
};

const toString = (array) => {
  return array.join(" ");
};

const arr = from(obj);
const str = toString(arr);

console.log(arr);
console.log(str);
