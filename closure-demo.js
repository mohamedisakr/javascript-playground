// https://slides.com/bgando/f2f-final-day-2#/3/4

const newClue = (name) => {
  const length = name.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 2);
  };
};

const suspectDidIt = newClue("suspect");
console.log(suspectDidIt("candlestick"));
