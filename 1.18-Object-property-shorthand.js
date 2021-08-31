// Easily define object literals in ES6.

// Consider the following code:
const getMousePosition = (x, y) => ({
    x: x,
    y: y
  });

// In ES6, this can be simplified as below

const getMousePosition = (x, y) => ({ x, y });

// Below is the practice

// Before adjustments

const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      name: name,
      age: age,
      gender: gender
    };
    // Only change code above this line
  };

// After adjustments
const createPerson = (name, age, gender) => ({ name, age, gender});