// PSEUDO CODE
    // User clicks a number button
        // User continues to click numbers
        // Each subsequent number is concatenated to previous number FIRST NUMBER clicked
        //FIRST NUMBER is shown on screen
    // User clicks an operator button
        // OPERATOR is stored in a variable
        // OPERATOR is shown on screen
    // User clicks more number buttons
        // Creating SECOND NUMBER
        // SECOND NUMBER is displayed on screen
    // User clicks equals button
        // CALCULATE function uses FIRST NUMBER, SECOND NUMBER, and OPERATOR to create the RESULT
        // RESULT is displayed on screen

    // CALCULATE FUNCTION
        // - can ADD, SUBSTRACT, DIVIDE or MULTIPLY
        // - can PERCENTAGE
        // - can SQUARE ROOT
        // - can handle 3 or more numbers inputted

const firstNumber = prompt("First number: ");
const operator = prompt("Operator: ");
const secondNumber = prompt("Second number: ");

alert(`${firstNumber} ${operator} ${secondNumber}`);
// const calculateNow = (firstNumber, secondNumber, operator) => {
//     alert(`${firstNumber} ${operator} ${secondNumber}`);
// }