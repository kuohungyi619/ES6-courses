// Template literal is a special string that makes creating complex strings easier.
// It allows you to create multi-line strings and to use string interpolation features to create strings.

// For example:
const person = {
    name: "Zodiac Hasbro",
    age: 56
  };
  
  const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;
  
  console.log(greeting);

  // 1. Use `` instead of '' or ""
  // 2. Don't need to use \n for new line
  // 3. Wrap variable strings in ${}

// Below is the practice

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (let i=0; i<arr.length; i++){
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
