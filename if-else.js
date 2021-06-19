// functional-style if..else
const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue() : isFalse();
};

// manual test cases
let price = 24_000;
let discount = price - price * 0.1;

const logDiscount = () => {
  console.log(
    `Greetings you have 10% discount from ${price} to be ${discount}`
  );
};

const logWithNoDiscount = () => {
  console.log("Continue purchasing to mazimize you chance");
};

ifElse(price > 20_000, logDiscount, logWithNoDiscount);
