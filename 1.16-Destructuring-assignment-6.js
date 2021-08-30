// In some cases, you can destructure the object in a function argument itself

const profileUpdate = (profileData) => {
    const {
        name, age, nationality, location
    }= profileData;
}

// The above code can be simplified as below

const profileUpdate = ({
    name, age, nationality, location
}) =>
{}

// Below is the practice

// Before adjustments

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  const half = (stats) => (stats.max + stats.min) / 2.0; 

// Requirements

// Use destructuring assignment within the argument 
// to the function half to send only max and min inside the function.

// After adjustments

const half = ({ max, min }) => (max + min) / 2.0;

