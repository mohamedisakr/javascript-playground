function birthdayCakeCandles(candles) {
  // Write your code here
  const n = candles.length;
  let max = -1000;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let curr = candles[i];
    if (curr > max) {
      max = curr;
      count = 1;
    } else if (curr === max) {
      count++;
    }
  }
  return count;
}

let candles = [4, 4, 1, 3];
let result = birthdayCakeCandles(candles);
console.log(result);

candles = [3, 2, 1, 3];
result = birthdayCakeCandles(candles);
console.log(result);
