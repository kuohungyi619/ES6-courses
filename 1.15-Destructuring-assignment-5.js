// We might want to collect the rest of the elements into a separate array.
// For example:

const [a,b, ...arr]=[1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);

// arr gets the rest of the values in the form of an array.
// You cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.

// Below is the practice

// Before adjustments

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
 
  const arr = list;
  
  return arr;
}
const arr = removeFirstTwo(source);

// Requirements

// Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() 
// so that arr is a sub-array of the original array source with the first two elements omitted.

// After adjustments

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
 
  const [a,b,...arr] = list;
  
  return arr;
}
const arr = removeFirstTwo(source);
