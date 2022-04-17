/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
  let divisors = 0;
  const digits = n.toString().split("").map(Number);
  digits.forEach((digit) => {
    if (n % digit === 0) {
      divisors++;
    }
  });
  return divisors;
}

// findDigits(12);
findDigits(1012);
