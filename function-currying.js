const add = (a) => (b) => {
  //(a, b) => {
  return a + b;
};

const curry = (f) => {
  return (a) => {
    return (b) => {
      return f(a, b);
    };
  };
};

// test cases
let a = 10;
let b = 5;
// let curriedSum = curry(add);
// console.log(curriedSum(a)(b));
console.log(add(a)(b));
