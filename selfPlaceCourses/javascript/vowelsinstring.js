/* 
*find vowels
*/

const inputString = "hello, I love GFG";

const vowels = "aeiou";

for(let i=0; i<inputString.length; i++) {
    if(vowels.includes(inputString[i])){
        console.log(`${inputString[i]} is a vowel`);
    }else {
        console.log(`${inputString[i]} is not a vowel`);
}
}