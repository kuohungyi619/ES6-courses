// Destructuring assignment is special syntax in ES6

// Below is the code example in ES5:
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;

// In ES6, the code above can be simplied as shown below:

const { name, age } = user;

// the name and age variables will be created and assigned the values of 
// their respective values from the user object.

// Below is the practice:

// Before adjustments:
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  const today = HIGH_TEMPERATURES.today;
  const tomorrow = HIGH_TEMPERATURES.tomorrow;
  

// Requirements:
// Replace the two assignments with an equivalent destructuring assignment. 
// It should still assign the variables today and tomorrow the values of today and tomorrow 
// from the HIGH_TEMPERATURES object.

// After adjustments:

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  const {today, tomorrow} = HIGH_TEMPERATURES

