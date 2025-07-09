/* 
*Given a range of number from 1 to 101, find all the even number and odd number
*
*/

for(let i = 0; i <= 101; i++) {
    if (i % 2 === 0){
        console.log(`Even Number ${i}`);
    }else {
        console.log(`Odd Number ${i}`);
    }
}

// Video Method
let remainder;
for(let i = 0; i <= 101; i++) {
    remainder = i % 2;
    if(remainder === 0){
        console.log(`${i} is an even number `);
    }
    else{
        console.log(`${i} is an odd number `);
    }
}