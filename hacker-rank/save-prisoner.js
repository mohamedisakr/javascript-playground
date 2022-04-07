// https://www.hackerrank.com/challenges/save-the-prisoner/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
// https://www.hackerrank.com/challenges/save-the-prisoner/forum
/*
 * Complete the 'saveThePrisoner' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n : the number of prisoners
 *  2. INTEGER m : the number of sweets
 *  3. INTEGER s : the chair number to start passing out treats at
 */

/*
7 19 2 --> 6
3 7 3 --> 3
*/
function saveThePrisoner(n, m, s) {
  return ((s + m - 2) % n) + 1;
}

let res = saveThePrisoner(5, 2, 1);
console.log(res === 2);

res = saveThePrisoner(5, 2, 2);
console.log(res === 3);

res = saveThePrisoner(7, 19, 2);
console.log(res === 6);

res = saveThePrisoner(3, 7, 3);
console.log(res === 3);
