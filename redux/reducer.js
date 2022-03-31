let id = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case "bugAdded":
      return [
        ...state,
        { id: ++id, description: action.payload.description, resolved: false },
      ];
    case "bugRemoved":
      return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }
}
// if (action.type === "bugAdded") {
//   return [
//     ...state,
//     { id: ++id, description: action.payload.description, resolved: false },
//   ];
// } else if (action.type === "bugRemoved") {
//   return state.filter((bug) => bug.id !== action.payload.id);
// }
// return state;

module.exports = reducer;
