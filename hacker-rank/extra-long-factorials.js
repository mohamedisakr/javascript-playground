// function extraLongFactorials(n) {
//   let extra = BigInt(n);
//   let factorial = 1n;
//   for (let i = 0n; i < extra; i++) {
//     factorial *= extra - i;
//   }
//   return String(factorial);
// }

function extraLongFactorials(n) {
  let extra = BigInt(n);
  let factorial = 1n;
  for (let i = 0n; i < extra; i++) {
    factorial *= extra - i;
  }
  console.log(String(factorial));
}

let result = extraLongFactorials(20);
console.log(result);

result = extraLongFactorials(25);
console.log(result);

result = extraLongFactorials(30);
console.log(result);
