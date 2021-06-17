const data = require("./airports-data");
listProperties = (airport) => {
  const { attributes } = airport;
  return ({
    name,
    city,
    country,
    iata,
    icao,
    latitude,
    longitude,
    altitude,
    timezone,
  } = attributes);
};

data.forEach((airport) => {
  console.log(listProperties(airport));
});
