/* 
* A program that reads 3 string and print the small string
*/

const firstString = 'apple';
const secondString = 'Banana';
const thirdString = 'kiwi';

const lengthOfFirstString = firstString.length;
const lengthOfSecondString = secondString.length;
const lengthOfthirdString = thirdString.length;

if (lengthOfFirstString < lengthOfSecondString && lengthOfFirstString < lengthOfthirdString) {
    console.log(`${firstString} is the smallest string`);
} else if (lengthOfSecondString < lengthOfFirstString && lengthOfSecondString < lengthOfthirdString) {
    console.log(`${secondString} is the smallest string`);
} else if (lengthOfthirdString < lengthOfFirstString && lengthOfthirdString < lengthOfSecondString) {
    console.log(`${thirdString} is the smallest string`);
} else {
    console.log("Found 2 or more string of the same length");
}

