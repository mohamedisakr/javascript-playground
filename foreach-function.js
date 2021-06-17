const data = require("./airports-data");
// Implement forEach function which takes 2 arguments
// 1. list -> iterable object
// 2. callback function
const forEach = (list, callback) => {
  // array
  if (Array.isArray(list)) {
    iterateArray(list, callback);
  }
  // object
  else {
    iterateObject(list, callback);
  }
};

const iterateArray = (list, callback) => {
  for (let i = 0; i < list.length; i++) {
    callback(list[i], i, list);
  }
};

const iterateObject = (list, callback) => {
  for (const [key, value] of Object.entries(list)) {
    callback(value, key, list);
  }
};

forEach(data, (item, index, data) => {
  console.log(item);
});

/*
const obj = {
  id: "YCB",
  type: "airport",
  attributes: {
    name: "Cambridge Bay Airport",
    city: "Cambridge Bay",
    country: "Canada",
    iata: "YCB",
    icao: "CYCB",
    latitude: "69.108101",
    longitude: "-105.138",
    altitude: 90,
    timezone: "America/Edmonton",
  },
};

forEach(obj, (item, key, obj) => {
  console.log(item);
});
// */
