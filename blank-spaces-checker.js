const hasBlankSpaces = (txt) => {
  return /^\s*$/.test(txt);
};

let txt = "   ";
console.log(hasBlankSpaces(txt));

txt = "the lazy dog";
console.log(hasBlankSpaces(txt));

txt = "     ";
console.log(hasBlankSpaces(txt));
