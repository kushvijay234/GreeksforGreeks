/*
Hoisting Example
This code demonstrates the concept of hoisting in JavaScript.
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their
execution context before the code is executed.

*/ 

// Example of hoisting with var 
// console.log(myVar); 
// var myVar=5;
// console.log(myVar); 

// Example of hoisting with function declarations
var hoisfunction = console.log(myFunction())

function myFunction() {
    console.log("Function is called before declaration");
}