// This example program is meant to demonstrate errors.
 
// There are some errors in this program, try run the program by pressing F5.
// Now look at the error messages and find and fix the errors.

let animal = "Lion"; // syntax error Lion should be a string and Compilation error semicolon needed at the end of the line as well
let animalType = "cub";
let numberOfTeeth = 16;
let numberOfLegs = 4; // syntax error should be a value instead of a string


fullSpec = " This is a " + (animal ) + " it has " + (numberOfTeeth) + " teeth " + " it has " + (numberOfLegs) + " legs " + " and it is a " + (animalType) ; // syntax error variables need to be inserted and wording put correctly to match strings


if (numberOfLegs == 4 && numberOfTeeth == 16){
console.log (fullSpec); // compilation error variable not spelt correctly and brackets need to be inserted it will also be a compilation error
}
