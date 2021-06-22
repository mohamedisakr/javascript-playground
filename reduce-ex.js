const reducer = () => {
  //
};

const newDevelopment = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": true },
      { "billiard room": false },
      { library: true },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": true },
      { "billiard room": false },
      { library: false },
    ],
  },
];

/*
rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": true },
      { "billiard room": false },
      { library: true },
    ],
*/
const roomReducer = (location, isIn) => {
  if (location[isIn]) {
    location[isIn] = location[isIn] + 1;
  } else {
    location[isIn] = 1;
  }
  return location;
};
const rooms = newDevelopment.map((item) => item.rooms);
const comomRomms = rooms.reduce(roomReducer, {}); //.filter(item=>i)
// console.log(rooms);

/*
const bitstrings = ["001101", "100010", "001010", "100100"]; // ["ballroom"];
for (let i = 0; i < bitstrings.length; i++) {
  for (let j = 0; j < bitstrings[i].length; j++) {
    //
  }
}
*/
