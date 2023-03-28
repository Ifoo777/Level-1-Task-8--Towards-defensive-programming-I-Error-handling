let car = "Toyota";
    let model = "Fortuner";     // Compilation error; incorrect space indentation, needs to be in line with 'name' and 'age'
carAge = 21;       // Compilation error; keyword 'let' not used to create the variable

let carModel = car + model +  is  + carAge + " years old."    // Runtime error; 'carAge' needs to be cast with String()
                                                                // Compilation error; 'is' is under the wrong syntax, needs to be within " " 
                                                                // Logical error; carModel does not have appropriate spacing requiring: + " " +
                                                                // Compilation error; semicolon needed at the end of the line
console.log carModel;    // Compilation error; brackets needed around carModel
