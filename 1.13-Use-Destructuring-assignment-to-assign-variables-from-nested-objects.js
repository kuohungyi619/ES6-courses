// Use the principles from the previous lessons to destructure values from nested objects.

// For example:
const user = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
  };

// Extract values of object properties and assign them to variables with the same name:

const {
    johnDoe:{
        age, email
    }
} = user;

// Assign an object properties' values to variables with different names

const{
    johnDoe:{
        age: userAge, email: userEmail
    }
} = user;

// Below is the practice

// Before adjustments

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
    const lowToday = LOCAL_FORECAST.today.low;
    const highToday = LOCAL_FORECAST.today.high;

// After adjustments

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  
  const {
    today: {
      low: lowToday,
      high: highToday
    }
  }= LOCAL_FORECAST 