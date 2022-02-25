/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
  if (v1 > v2 && (x2 - x1) % (v1 - v2) == 0) {
    return "YES";
  } else {
    return "NO";
  }
}

// function kangaroo(x1, v1, x2, v2) {
//   v1 > v2 && (x2 - x1) % (v1 - v2) == 0 ? "YES" : "NO";
// }

// 0 3 4 2 => yes
// x1 = 0
// v1 = 3
// x2 = 4
// v2 = 2

// 0 2 5 3 => no
