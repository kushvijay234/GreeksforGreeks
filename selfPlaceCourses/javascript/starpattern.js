/* 
* Star Pattern
*   *
*   * *
*   * * *
*   * * * *
*   * * * * * 
*   * * * * * *
*/

const symbol = "* "

for(let i=1; i<=6; i++){
   console.log(symbol.repeat(i));
}

console.log("------------------------------");
// Reverse Star

for(let i=6 ; i>=1; i--) {
    console.log(symbol.repeat(i));
}

