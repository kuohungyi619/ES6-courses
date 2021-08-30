// The spread operator unpacks all contents of an array into a comma-separated list.
// Consequently, you cannot pick or choose which elements you want to assign to variables.

// Destructuring an array lets us do:

const[a, b] = [1, 2, 3, 4, 5];
console.log(a, b);

// This will return 1, 2

// We can also access the value at any index in an array

const[a,b,,,c]= [1,2,3,4,5,6];
console.log(a,b,c)

// This will return 1,2,5

// Below is the practice

// Before adjustments

let a = 8, b = 6;

// Requirement

// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, 
// and b receives the value stored in a.

// After adjustments

let a = 8, b = 6;
[a, b] = [b, a]
