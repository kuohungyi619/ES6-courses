/*
When declaring a variable with the let keyword inside a block, statement, or expression, 
its scope is limited to that block, statement, or expression.
*/

var numArray =[];
for (var i=0; i<3; i++){
    numArray.push(i);
}
console.log(numArray);
console.log(i);

// Explanation: 
// With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable.

var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);

//This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the i variable. 
//This is because the stored function will always refer to the value of the updated global i variable.
//以上會造成問題的原因是：如果在for loop裡面創建一個function且運用的是i variable, 那他永遠會追溯到global variable.

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());

//Here the console will display the value 3.
//This is because the value assigned to i was updated and the printNumTwo() returns the global i 
//and not the value i had when the function was created in the for loop.
//因為在global variable中i會累加到3,因此在此console會出現3而非2

let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);

//this is different from the one before, the var is changed to let. 
//The console.log(printNumTwo()) will return 2, because the let keyword is within the loop statement.
//The console.log(i) will return nothing, because i is not declared at global scope.

//Below is the practice

function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

  // This will return:
  // Block scope i is block scope (Because i is defined in the scope.)
  // Function scope i is: function scope (Because in the global scope i = function scope)
  


