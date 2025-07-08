// table 
var i;

const readlineSyn = require("readline-sync");

const number = Number(readlineSyn.question("Enter The Table Number that you Want to Know:"));

var table = number; 

for (i=1; i <= 10; i++)
{
    var result = table * i;
    console.log(`${table} * ${i} = ${result}`);
}