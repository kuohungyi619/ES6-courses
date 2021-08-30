// In order to create more flexible functions, ES6 introduces the rest parameter.
// You can create functions that take a variable number of arguments.

// For example:
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2));
  console.log(howMany("string", null, [1, 2, 3], { }));

// The console would display the strings You have passed 3 arguments. and You have passed 4 arguments.
// The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.

//Below is the practice

//Before the adjustments:
//Modify the function sum using the rest parameter 
//in such a way that the function sum is able to take any number of arguments and return their sum.
const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  }

//After the adjustments:
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }