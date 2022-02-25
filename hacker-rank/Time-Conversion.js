function timeConversion(s) {
  const [hour, min, sec, period] = s.match(/\d+|\w+/g);
  let time = "";

  if (Number(hour) === 12 && period === "AM") {
    // 12 & AM --> set 12 to 00
    time = `00:${min}:${sec}`;
  } else if (Number(hour) === 12 && period === "PM") {
    // 12 & PM --> no changes
    time = `${hour}:${min}:${sec}`;
  } else if (Number(hour) < 12 && period === "PM") {
    // < 12 & PM --> add 12 to hour
    let newHour = Number(hour) + 12;
    time = `${newHour}:${min}:${sec}`;
  } else if (Number(hour) < 12 && period === "AM") {
    time = `${hour}:${min}:${sec}`;
  }

  return time;
}

const testCases = [
  { input: "12:00:00AM", output: "00:00:00" },
  { input: "12:01:00AM", output: "00:01:00" },
  { input: "12:01:00PM", output: "12:01:00" },
  { input: "07:05:45PM", output: "19:05:45" },
  { input: "12:30:49PM", output: "12:30:49" },
  { input: "1:00:00PM", output: "13:00:00" },
  { input: "11:00:00PM", output: "23:00:00" },
  { input: "11:59:00PM", output: "23:59:00" },
  { input: "1:00:00AM", output: "01:00:00" },
  { input: "11:00:00AM", output: "11:00:00" },
  { input: "11:59:00AM", output: "11:59:00" },
];

testCases.forEach(({ input, output }) => {
  let result = timeConversion(input);
  // console.log(`result : ${result}`);
  // console.log(`output : ${output}`);
  console.log(`valid result : ${result === output}`);
  console.log();
});

// PM & hour = 12 => remove PM

/*
let s = `07:05:45PM`; // 19:05:45
let result = timeConversion(s);
console.log(result);

s = "12:30:49PM";
result = timeConversion(s);
console.log(result);
*/

// if (period === "PM" && hour === 12) {
//   return `${hour}:${min}:${sec}`;
// } else if (period === "AM" && hour === 12) {
//   console.log(`hello`);
//   return `00:${min}:${sec}`;
// } else {
//   return `${hour}:${min}:${sec}`; // [hour, min, sec, period];
// }
