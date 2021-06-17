// Implement C(n,r) n choose r combination algorithm
// 1. recursive
// 2. factorial
// 3. multiplicative

// 1. recursive
// we will use 3 Combinations Properties / Formulas / Identities
// first C(n,0) = 1
// second C(n,n) = 1
// third C(n,r) = C(n-1, r) + C(n-1, r-1)
const combinationRecursive = (n, r) => {
  if (r === 0 || r === n) {
    return 1;
  } else {
    return combinationRecursive(n - 1, r) + combinationRecursive(n - 1, r - 1);
  }
};

// 2. factorial
// we will use Combination formula n!/(r!*(n-r)!)
const combinationFactorial = (n, r) => {
  return fact(n) / (fact(r) * fact(n - r));
};

// 3. multiplicative
const combinationMultipicative = (n, r) => {
  let result = 1;
  for (let i = 1; i < r + 1; i++) {
    result *= (n - (r - i)) / i;
  }
  return result;
};

const fact = (n) => {
  let result = 1;
  for (let i = n; i; i--) {
    result *= i;
  }
  return result;
};

/*
// test cases for combinationRecursive
console.log(combinationRecursive(10, 3)); // 120
console.log(combinationRecursive(5, 3)); // 10
console.log(combinationRecursive(6, 2)); // 15
console.log(combinationRecursive(10, 5)); // 252
console.log(combinationRecursive(20, 11)); // 167960
console.log(combinationRecursive(5, 2)); // 10
console.log(combinationRecursive(4, 2)); // 6
*/

/*
// test cases for combinationFactorial
console.log(combinationFactorial(10, 3)); // 120
console.log(combinationFactorial(5, 3)); // 10
console.log(combinationFactorial(6, 2)); // 15
console.log(combinationFactorial(10, 5)); // 252
console.log(combinationFactorial(20, 11)); // 167960
console.log(combinationFactorial(5, 2)); // 10
console.log(combinationFactorial(4, 2)); // 6
// */

// /*
// test cases for combinationMultipicative
console.log(combinationMultipicative(10, 3)); // 120
console.log(combinationMultipicative(5, 3)); // 10
console.log(combinationMultipicative(6, 2)); // 15
console.log(combinationMultipicative(10, 5)); // 252
console.log(combinationMultipicative(20, 11)); // 167960
console.log(combinationMultipicative(5, 2)); // 10
console.log(combinationMultipicative(4, 2)); // 6
// */
