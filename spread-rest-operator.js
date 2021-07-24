// Write a function which take a variable number of paramters and return its sum.
const sum = (...numbers) => {
  const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue;
  };

  return numbers.reduce(reducer, 0);
};

// const total = sum(1, 2, 3, 4, 5, 20);
// console.log(total);

// Write a function which take multiplier as a first argument,
// and variable number of paramters and return its sum times the multiplier.
const multiplyAndSum = (multiplier, ...numbers) => {
  const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue;
  };

  return multiplier * numbers.reduce(reducer, 0);
};

const result = multiplyAndSum(10, 1, 2, 3, 4, 5);
console.log(result);
