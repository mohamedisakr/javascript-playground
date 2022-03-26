function convertToArray(a, b, c) {
  console.log("The arguments object:");
  console.log(arguments);

  const argumentsArray = Array.from(arguments);

  console.log("The arguments object as array:");
  console.log(argumentsArray);

  console.log(`argumentsArray type : ${typeof argumentsArray}`);

  // Example of using the join() method
  const joinedArray = argumentsArray.join(", ");

  console.log("Using join() on array: ", joinedArray);
}

convertToArray(1, 2, 3, 4, 5);

/*
function build(a) {
  const args = Array.from(arguments);
  console.log(`arguments : ${JSON.stringify(arguments)}`);
  console.log(`args type : ${typeof args}`);
}

build(1, 2, 3);
*/
