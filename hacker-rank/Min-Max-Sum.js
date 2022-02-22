function miniMaxSum(arr) {
  // Write your code here
  const n = arr.length;
  const sorted = arr.sort((a, b) => a - b);

  const minSum = sorted
    .map((val, i) => (i !== n - 1 ? val : 0))
    .reduce((prev, curr) => prev + curr, 0);

  const maxSum = sorted
    .map((val, i) => (i !== 0 ? val : 0))
    .reduce((prev, curr) => prev + curr, 0);

  console.log(`${minSum} ${maxSum}`);
}

let arr = [1, 2, 3, 4, 5];
let result = miniMaxSum(arr);
console.log(result);

arr = [1, 3, 5, 7, 9];
result = miniMaxSum(arr);
console.log(result);
