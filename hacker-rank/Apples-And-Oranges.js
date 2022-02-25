/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appCount = 0;
  let orCount = 0;

  apples.forEach((apple) => {
    let item = Number(apple) + a;
    if (item >= s && item <= t) {
      appCount++;
    }
  });

  oranges.forEach((orange) => {
    let item = Number(orange) + b;
    if (item >= s && item <= t) {
      orCount++;
    }
  });
  console.log(appCount);
  console.log(orCount);
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
console.log();
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
