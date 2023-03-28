// This example program is meant to demonstrate errors.
 
// There are some errors in this program.
// Now look at the error messages and find and fix the errors.

    console.log ("Welcome to the error program"); // inserted brackets compilation/syntax error
    //Console.log ("\n"); // compilation/syntax error in line 7

     let ageStr = "24";   // == wrong syntax compilation error = is to assign value to variable
     age = parseInt(ageStr); //incorrect function used runtime error parseInt
    console.log(" I'm" + age + " years old.");  // Logical error; age does not have appropriate spacing requiring: + " " + and runtime error incorrect variable
    let three = 3; // wrong syntax compilation error value assigned to a variable should be a value and not a string

    let answerYears = age + three; // runtime error 

console.log (" The total number of years:" + answerYears); //compilation error answerYears is a variable and not a string
answerMonths = answerYears * 12; // // Compilation error; semicolon needed at the end of the line and typeError incorrect variable stated answerYears correct variable needs to be applied

console.log (" In 3 years and 6 months, I'll be " + answerMonths + " months old"); //inserted brackets syntax/compilation error

//HINT, 324 months is the correct answer 