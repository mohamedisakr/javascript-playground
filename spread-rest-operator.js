// Write a function which take a variable number of paramters and return its sum.
const sum = (...numbers) => {
  const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue;
  };

  return numbers.reduce(reducer, 0);
};

// const total = sum(1, 2, 3, 4, 5, 20);
// console.log(total);

// Write a function which take multiplier as a first argument,
// and variable number of paramters and return its sum times the multiplier.
const multiplyAndSum = (multiplier, ...numbers) => {
  const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue;
  };

  return multiplier * numbers.reduce(reducer, 0);
};

// const result = multiplyAndSum(10, 1, 2, 3, 4, 5);
// console.log(result);

// Copy array a into a new array called b using spread operator
const a = [1, 2, 3, 4, 5];
const b = [...a];

// console.log(a);
// console.log(b);

// Convert the following NodeList to an array
// const divs = [...document.querySelectorAll("div")];

// Clone the following object into object named newAirport
const airport = {
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

// const newAirport = { ...airport };
// console.log(newAirport);

// Combine the person and job objects into employee object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  ssn: "123-456-2356",
  contact: {
    phone: "408-989-8745",
    email: "john.doe@example.com",
  },
};

const job = {
  jobTitle: "JavaScript Developer",
  location: "USA",
};

const employee = { ...person, ...job };
console.log(employee);
