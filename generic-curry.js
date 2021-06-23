// General Curry Function
function curry(fn, ...args) {
  return function (..._arg) {
    return fn(...args, ..._arg);
  };
}

// const curry = (fn, ...args) => {
//   console.log(`fn.length is ${fn.length}`);
//   console.log(`args.length is ${args.length}`);
//   fn.length <= args.length
//     ? fn(...args)
//     : (...more) => curry(fn, ...args, ...more);
// };

// function curry(func) {
//   return function curried(...args) {
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// }

/*
const sum = (a, b) => {
  return a + b;
};

const curriedSum = curry(sum); // using _.curry from lodash library
// console.log(curriedSum);
// console.log(curriedSum(1, 2)); // 3, still callable normally

// const sum2 =
console.log(curriedSum(1)(2)); // 3, called partially
// */

// /*
// function volume(l, h, w) {
const volume = (l, h, w) => {
  return l * h * w;
};

const hCy = curry(volume, 100);
console.log(hCy(200, 900)); // 18000000l
console.log(hCy(70, 60)); // 420000l
// console.log(hCy(70)(60)); // 420000l
// */
