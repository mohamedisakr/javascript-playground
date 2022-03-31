function createStore() {
  let state = { classId: 1 }; //= {};

  //   function setState(val) {
  //     state = val;
  //   }

  function getState() {
    return state;
  }

  function dispatch(overrides) {
    state = { ...state, ...overrides };
  }

  return {
    getState,
    dispatch,
    // setState,
    // subscribe,
    // getState,
    // replaceReducer,
  };
}

const store = createStore();
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
