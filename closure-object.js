// https://slides.com/bgando/f2f-final-day-2#/3/5
const countClues = () => {
  let n = 0;

  return {
    count: () => n++,
    reset: () => (n = 0),
  };
};

const { count, reset } = countClues();
for (let i = 0; i < 5; i++) {
  console.log(count());
}

console.log(reset());
