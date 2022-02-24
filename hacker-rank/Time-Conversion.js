function timeConversion(s) {
  // Write your code here
  const [hour, min, sec, period] = s.match(/\d+|\w+/g);
  return [hour, min, sec, period];
}

let s = `07:05:45PM`;
let result = timeConversion(s);
console.log(result);

s = "12:30:49PM";
result = timeConversion(s);
console.log(result);
