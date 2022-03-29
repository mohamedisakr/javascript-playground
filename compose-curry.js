/*
1. Write code in a functional style to convert the input to the output:
input = { tag: “JAVASCRIPT” }
output = “(javascript)”
*/

const extract = ({ tag }) => tag;
const print = (text) => `"(${text})"`;

const input = { tag: "JAVASCRIPT" };
const result = extract(input);
const textToPrint = print(result);
console.log(textToPrint);
