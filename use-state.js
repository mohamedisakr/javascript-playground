// implement react useState hook

const states = [];
let callCount = -1;

const useState = (initialValue) => {
  const id = ++callCount;

  if (states[id]) {
    return states[id];
  }

  const setValue = (updateValue) => {
    states[id][0] = updateValue;
  };

  const tuple = [initialValue, setValue];
  // console.log(`tuple: ${tuple}`);
  states.push(tuple);
  // console.log(`states: ${states}`);
  return tuple;
};

// test if it has initial value
// const [count, setCount] = useState(0);
// console.log(count === 0);

const [initialValue, setValue] = useState(0);
console.log(initialValue === 0);

// test if it has new value
// setCount(1);
// console.log(count === 1);

setValue(1);
console.log(initialValue === 1);
// console.log(`count: ${count}`);
// console.log(`setCount: ${setCount}`);
