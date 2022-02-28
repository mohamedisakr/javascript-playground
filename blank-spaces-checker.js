// const hasBlankSpaces = (txt) => {
const isBlank = (txt) => {
  const regex = /^\s+$/;
  return regex.test(txt);
};

let txt = "   ";
console.log(isBlank(txt));

txt = "     ";
console.log(isBlank(txt));

txt = " ";
console.log(isBlank(txt));

txt = "the lazy dog";
console.log(isBlank(txt));
