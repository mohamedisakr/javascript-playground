// https://www.hackerrank.com/challenges/circular-array-rotation/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

/*
 * Complete the 'circularArrayRotation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 *  3. INTEGER_ARRAY queries
 */

function rightRotate(arr) {
  let a = [...arr];
  a.push(a.shift());
  return a;
}

// public static void main(String[] args) {
//   Scanner in = new Scanner(System.in);
//   int n = in.nextInt(),
// k = in.nextInt(),
// q = in.nextInt();
//   int[] a = new int[n];
//   for(int i = 0; i < n; i++) a[i] = in.nextInt();
//   for(int i = 0; i < q; i++)
// System.out.println(a[(n+((in.nextInt()-k)%n)) % n]);
// }

function circularArrayRotation(a, k, queries) {
  let arr = [];
  for (let i = 0; i < k; i++) {
    arr = rightRotate(a);
  }
  // return arr;
  for (let i = 0; i < queries; i++) {
    console.log(arr[queries[i]]);
  }
}
