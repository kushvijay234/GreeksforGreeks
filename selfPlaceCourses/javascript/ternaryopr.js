/* 
* Ternary Operators 
*/

 const totalMarksScored = 100;

// (totalMarksScored < 40) ? console.log("You Need to Word Hard") : console.log("You Cleared the exam. Great!")
 const result = totalMarksScored < 40 ? "You need to Work Hard" : " You Cleared the Exam. Great !"

console.log(result) 

// PART -2 

const result1 = totalMarksScored < 40 ? "You need to work Hard" : totalMarksScored < 60 ? "B Brade" : totalMarksScored < 75 ? "A grade" : totalMarksScored < 85 ? "A+ Grade" : "Genius";  

console.log(result1);
