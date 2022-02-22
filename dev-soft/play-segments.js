// def game(nums):
//   s = sum(nums)
//   cur_sum = 0
//   for i in range(len(nums)):
//     cur_sum += nums[i]
//     if cur_sum > s-cur_sum:
//       return i+1
//   return -1

function playSegments(coins) {
  let total = 0;

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] == 1) {
      total++;
    } else {
      total--;
    }
  }

  let sum = 0;
  let minSegment = -1;

  for (let i = 0; i < coins.length - 1; i++) {
    if (coins[i] == 1) {
      sum++;
    } else {
      sum--;
    }

    if (sum > total - sum) {
      minSegment = i;
      break;
    }
  }
  return minSegment + 1;
}

// function playSegments(coins) {
//   // sum the array
//   const total = coins.reduce((prev, cur) => prev + cur, 0);
//   let currentSum = 0;

//   //keep adding player 1's score
//   for (let i = 0; i < coins.length; i++) {
//     currentSum += coins[i];
//     if (currentSum > total - currentSum) {
//       return i + 1;
//     }
//     return -1;
//   }
// }

("use strict");

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'playSegments' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY coins as parameter.
 */

function playSegments(coins) {
  // Write your code here
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const coinsCount = parseInt(readLine().trim(), 10);

  let coins = [];

  for (let i = 0; i < coinsCount; i++) {
    const coinsItem = parseInt(readLine().trim(), 10);
    coins.push(coinsItem);
  }

  const result = playSegments(coins);

  ws.write(result + "\n");

  ws.end();
}
