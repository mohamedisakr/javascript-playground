// const createTuple = (a, b, c, d) => {
// function createTuple(a, b, c, d) {
const createTuple = (a, b, c, ...d) => {
  console.log(arguments);
  return [
    [a, c],
    [b, d],
  ];
};

console.log(createTuple("It", "be", "could", "anyone", "no one"));
