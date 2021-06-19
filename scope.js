let actual;

const parent = () => {
  const fun = () => {
    let name = "inner";
    actual = name;
  };

  fun();
  console.log(`actual is equal to 'inner': ${actual === "inner"}`);
};

parent();
