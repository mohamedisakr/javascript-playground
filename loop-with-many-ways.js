// const axios = require("axios");
const data = require("./airports-data");
// exercise
// loop through the following API with 6 ways

// 1. using forEach
data.forEach((item) => {
  const { name, city, country } = item.attributes;
  console.log({ name, city, country });
});

// 2. for
for (let i = 0; i < data.length; i++) {
  // console.log(data[i]);
  const { name, city, country } = data[i].attributes;
  console.log({ name, city, country });
}

// 3. for...of
for (const item of data) {
  const { name, city, country } = item.attributes;
  console.log({ name, city, country });
}

// 4. while
let index = 0;
while (index < data.length) {
  const { name, city, country } = data[index].attributes;
  console.log({ name, city, country });
  index++;
}

// 5. do...while
let index = 0;
do {
  const { name, city, country } = data[index].attributes;
  console.log({ name, city, country });
  index++;
} while (index < data.length);

// 6. map
data.map((item) => {
  const { name, city, country } = item.attributes;
  console.log({ name, city, country });
});

/*
const url = `https://airportgap.dev-tester.com/api/airports`;
let airports = [];

const getAirports = async () => {
  try {
    const res = await axios.get(url);
    airports = await [...res.data.data];
  } catch (err) {
    console.error(err);
  }
  // console.log(airports);
  return airports;
};

// let airports = getAirports()
//   .then((result) => {
//     return result;
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// console.log(airports);

// let airportList = getAirports()
//   .then((result) => {
//     airports = [...result];
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// console.log(airportList);

let airportList = (async () => {
  const response = await getAirports();
  // console.log(response);
  airports = [...response];
})();
console.log(airportList);
// console.log(airports);
*/
