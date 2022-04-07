// https://www.hackerrank.com/challenges/strange-advertising/problem?h_r=next-challenge&h_v=zen

function viralAdvertising(n) {
  let total = 0;
  let shared = 5;

  for (let i = 0; i < n; i++) {
    let like = Math.floor(shared / 2);
    total += like;
    shared = like * 3;
  }

  return total;
}
