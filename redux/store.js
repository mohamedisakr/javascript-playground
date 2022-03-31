const reducer = require("./reducer");

function createStore(reducer) {
  let state;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);

    for (let listener of listeners) {
      listener();
    }
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

module.exports = createStore(reducer);

// setState,
// subscribe,
// getState,
// replaceReducer,

/*
// store.setState(10);
// let result = store.getState();
// console.log(result);

store.dispatch({ studentId: 1, name: "john doe" });
console.log(store.getState());

/*
const store = {
  state: {},

  dispatch: function (action) {
    console.log(action);
  },

  subscribe: function (listener) {
    console.log(listener);
  },

  getState: function () {
    console.log(`state`);
  },

  replaceReducer: function (nextReducer) {
    console.log();
  },
};

// console.log("store: ", store);
console.log("state: ", store.state);
*/
