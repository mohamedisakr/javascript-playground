// functional-style if..else
const ifElse = (condition, isTrue, isFalse, ...args) => {
  return condition ? isTrue(...args) : isFalse(args);
};

// manual test cases
let price = 24_000;
// let price = 12_000;
let discount = price - price * 0.1;

const logDiscount = () => {
  console.log(
    `Greetings you have 10% discount from ${price} to be ${discount}`
  );
};

const logWithNoDiscount = () => {
  console.log("Continue purchasing to mazimize you chance");
};

ifElse(price > 20_000, logDiscount, logWithNoDiscount, { price, discount });

/*
const obj = {
  price: 12_000,
  discount() {
    return price - price * 0.1;
  },
};

const { price, discount } = obj;
console.log(price, discount());
*/
