const data = require("./projection-data");
const map = require("./map-function");

const names = map(data, (item) => {
  return item.name;
}); //data.map((item) => item.name);
console.log(names);
