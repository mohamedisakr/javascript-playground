const axios = require("axios");
// exercise
// loop through the following API with 6 ways

const url = `https://airportgap.dev-tester.com/api/airports`;
let airports = [];

const getAirports = async () => {
  const res = await axios.get(url);
  airports = [...res.data.data];
  //   console.log(airports);
  return airports;
};

// airportList = getAirports();
// console.log(airportList);
getAirports();
console.log(airports);
