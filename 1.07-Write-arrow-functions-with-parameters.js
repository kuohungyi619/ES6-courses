// You can pass arguments into an arrow function.

// For example:
const doubler = (item) => item * 2;
doubler(4);

// If an arrow function has only one parameter, the parenthese can be omitted.

// For example:
const doubler = item => item * 2;

// It is possible to pass more than one argument into an arrow function.

// For example:
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);

// Below is the practice

const myConcat = (arr2, arr1) => arr2.concat(arr1)
console.log(myConcat([1, 2], [3, 4, 5]));
