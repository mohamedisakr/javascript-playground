const data = require("./airports-data");
data.forEach((airport) => {
  const { attributes } = airport;
  const {
    name,
    city,
    country,
    iata,
    icao,
    latitude,
    longitude,
    altitude,
    timezone,
  } = attributes;
  console.log({
    name,
    city,
    country,
    iata,
    icao,
    latitude,
    longitude,
    altitude,
    timezone,
  });
});
// console.log(data);
