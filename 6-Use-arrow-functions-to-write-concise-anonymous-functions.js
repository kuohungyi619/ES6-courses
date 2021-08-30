// In JavaScript, we often don't need to name our functions, 
// especially when passing a function as an argument to another function. 
// Instead, we create inline functions. 
// We don't need to name these functions because we do not reuse them anywhere else.

// For example:
// We often use the following syntax:
const myFunc = function() {
    const myVar = "value";
    return myVar;
  }

// This can be simplified as shown below:
const myFunc = () => "value";

// Below is the practice

// Original:
var magic = function() {
    return new Date();
  };

// Simplified:
const magic = () => new Date();
