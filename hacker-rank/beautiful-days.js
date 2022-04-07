// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

function reverse(num) {
  return num.toString().split("").reverse().join("");
}

function beautifulDays(i, j, k) {
  let count = 0;
  for (let start = i; start <= j; start++) {
    let result = Math.abs(start - reverse(start));
    if (result % k === 0) {
      count++;
    }
  }
  return count;
}

const res = beautifulDays(20, 23, 6);
console.log(res);

// const rev = reverse(21);
// console.log(rev);
