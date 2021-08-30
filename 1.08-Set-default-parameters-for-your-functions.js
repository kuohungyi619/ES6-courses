// In order to help us create more flexible functions, ES6 introduces default parameters for functions.

// For example:
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

// The console will display the strings Hello John and Hello Anonymous.
// The default parameter kicks in when the argument is not specified (it is undefined). 

// Below is the practice

// Before change:
const increment = (number, value) => number + value;

// After adjustments
const increment = (number, value = 1) => number + value;