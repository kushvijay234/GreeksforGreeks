/* 
* Display that input have minimum 12 Charatcer in Input 
*
*
*/

const readlineSyn = require("readline-sync");

const userName = readlineSyn.question("Enter The UserName :");

var userNameLength = userName.length;

if (userNameLength < 4) {
    console.log("UserName is Too Short");
}
else if (userNameLength > 4 && userNameLength < 12) {
 console.log("UserName is Good");
}
else {
    console.log("UserName is too Long");
}