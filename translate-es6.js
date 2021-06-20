// https://slides.com/bgando/f2f-final-day-2#/1/6

const increment = (n) => {
  return n + 1;
};

const square = (n) => {
  return n * n;
};

const doMathSoIDontHaveTo = (n, func) => {
  return func(n);
};

console.log(doMathSoIDontHaveTo(5, square));

console.log(doMathSoIDontHaveTo(4, increment));

// var increment = function (n) {
//   return n + 1;
// };

// var square = function (n) {
//   return n * n;
// };

// var doMathSoIDontHaveTo = function (n, func) {
//   return func(n);
// };
