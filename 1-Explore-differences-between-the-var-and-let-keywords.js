/*
Understand the difference between var and let keywords
*/

// variables declared with var keyword can be overwritten without an error

var camper = "James";
var camper = "David";
console.log(camper)

// This will create an error if camper is declared with let, since it cannot be overwritten

let camper = "James";
let camper = "David";
console.log(camper)

// "use strict"
// This enables Strict Mode, which catches common coding mistakes and "unsafe" actions.

// For example:

"use strict";
x= 3.14;

// This will create an error because x is not defined.



