// This course taught how to use const keyword.
// Different from let keyword, variables declared using const are read-only.
// Once a variable is assigned with const, it cannot be reassigned.

// For example:
const FAV_PET = "Cats";
FAV_PET = "Dogs";

// This will create an error, since FAV_PET cannot be reassigned.
// A common A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.

// Below is the practice

function printManyTimes(str) {

    // Only change code below this line
  
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  
    // Only change code above this line
  
  }
  printManyTimes("freeCodeCamp");