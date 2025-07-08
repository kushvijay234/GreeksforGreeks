/* 
* Nested If Else 
* Even and odd
*/
const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("Enter a number"));

const remainder =  number % 2;

if (remainder === 0) {
    console.log(`${number} is an even number`)
}
else {
    console.log(`${number} is an odd number`);
}