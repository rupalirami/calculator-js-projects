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

// Store HTML elements in variables

// const operator = document.querySelectorAll(".opr");
// const numArray = document.querySelectorAll(".num");

const numberZero = document.querySelector("#num-0");
const numberOne = document.querySelector("#num-1");
const numberTwo = document.querySelector("#num-2");
// const numberThree = document.querySelector("#num-3");
// const numberFour = document.querySelector("#num-4");
// const numberFive = document.querySelector("#num-5");
// const numberSix = document.querySelector("#num-6");
// const numberSeven = document.querySelector("#num-7");
// const numberEight = document.querySelector("#num-8");
// const numberNine = document.querySelector("#num-9");


// const oprPercentage = document.querySelector("#opr-percentage");
// const oprDivide = document.querySelector("#opr-divide");
const oprMultiply = document.querySelector("#opr-multiply");
const oprSubstract = document.querySelector("#opr-substract");
const oprAdd = document.querySelector("#opr-add");
// const oprRoot = document.querySelector("#opr-root");
// const actionBkSpace = document.querySelector("#opr-bkspace");
// const actionCancel = document.querySelector("#opr-cancel");
// const actionChangeSign = document.querySelector("#changesign");
const actionCalculate = document.querySelector("#opr-calculate");

const inputDisplay = document.querySelectorAll(".input-display");
const resultsDisplay = document.querySelectorAll(".results-display");

console.log("numbers 0,1,2 and operators *,-,+ working");
// console.log(numberZero);
// console.log(numberOne);
// console.log(numberTwo);
// console.log(numberThree);
// console.log(numberFour);
// console.log(numberFive);
// console.log(numberSix);
// console.log(numberSeven);
// console.log(numberEight);
// console.log(numberNine);
// console.log(numArray);
// console.log(oprPercentage);
// console.log(oprDivide);
// console.log(oprMultiply);
// console.log(oprSubstract);
// console.log(oprAdd);
// console.log(oprRoot);
// console.log(actionBkSpace);
// console.log(actionCancel);
// console.log(actionChangeSign);
console.log(actionCalculate);
// console.log(inputDisplay);
// console.log(resultsDisplay);

// initialize variables
// let results = 0;
const initializeParam = () => {
    let firstInput = "";
    let secondInput = "";
    let inputDisplayText = "";
    let resultsDisplayText = "";
    let isOperatorClicked = false;
    let operator = "";
    // let changeSignDisplay = "";
};
// initializeParam();

let firstInput = "";
let secondInput = "";
let inputDisplayText = "";
let resultsDisplayText = "";
let isOperatorClicked = false;
let operator = "";
// let changeSignDisplay = "";

// calculateNow FUNCTION using two numbers and operator when opr-Calculate clicked and changes text for HTML classes input-display and results-display

const calculateNow = (first, second, operation) => {
    //change to return a variable and not explicit return
    // let results;
    // let errorMsg = 0;
    // console.log(`first number is ${first}`);
    // console.log(`first number is ${second}`);
    console.log(`Operator is ${operation}`);
    console.log(`typeof first input ${typeof first}`);
    console.log(`typeof second input ${typeof second}`);
    switch (operation) {
        case "+":
            results = (first + second);
            // console.log("in case addition " + results);
            break;
        case "-":
            results = (first - second);
            // console.log("in case multiplication");
            break;
        case "/":
            console.log("in case division");
            if (second === 0) {
                // console.log("in division by 0");
                // errorMsg = 1;
                results = "Error: Division by 0 not permitted"
                // clear secondNumberInput string variable and refresh display input
                return;
            } else {
                // console.log("in non-zero division")
                results = first/second;
            }
            // remove ternary command to ensure errorMsg can be captured
            // results = (second === 0) ? "Error: Division by 0 not permitted": (first / second) ;
            break;
        case "*":
            // console.log("in case multiplication");
            results = (first * second);
            break;
        case "%":
            // console.log("in case percentage");
            results = (first*(second/100));
            break;
        case "√":
            // console.log("in case power")
            if (second > 0 && second < 6) {
                // console.log("in power if");
                results = Math.pow(first, 1/second).toFixed(2);
            } else {
                // console.log("in power else")
                // errorMsg = 1;
                results = "Error: power can only be between 1 and 5 for now!";
            };  
            break;      
    } 
    return results;
}

// Get OPERATOR values
oprAdd.addEventListener("click", () => {
    // oprAdd.value;
    operator = "+";
    isOperatorClicked = true;
    inputDisplayText = inputDisplayText + operator;
        console.log(`opr variable on click is ${operator}`);
});
oprMultiply.addEventListener("click", () => {
    operator = "*";
    isOperatorClicked = true;
    inputDisplayText = inputDisplayText + operator;
        console.log(`opr variable on click is ${operator}`);
});
oprSubstract.addEventListener("click", () => {
    operator = "-";
    isOperatorClicked = true;
    inputDisplayText = inputDisplayText + operator;
        console.log(`opr variable on click is ${operator}`);
});

// Get NUMBER values
numberZero.addEventListener("click", () => {
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "0";
        inputDisplayText = inputDisplayText + secondInput;
    } else {
        firstInput = firstInput + "0";
        inputDisplayText = inputDisplayText + firstInput;
    }
        console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
        console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
});
numberOne.addEventListener("click", () => {
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "1";
        inputDisplayText = inputDisplayText + secondInput;
    } else {
        firstInput = firstInput + "1";
        inputDisplayText = inputDisplayText + firstInput;
    }
        console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
        console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
});
numberTwo.addEventListener("click", () => {
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "2";
        inputDisplayText = inputDisplayText + secondInput;
    } else {
        firstInput = firstInput + "2";
        inputDisplayText = inputDisplayText + firstInput;
    }
        console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
        console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
});

// numArray.forEach((num) => {
//     num.addEventListener("click" , () => num.append());
// });

// Calculate RESULTS on = click; initialize parameters
actionCalculate.addEventListener("click",function() {
        console.log(`input values are num1 ${firstInput} (${typeof firstInput}), opr ${operator}, num2 ${secondInput} (${typeof secondInput})`);
    const firstInputNumber = Number(firstInput);
    const secondInputNumber = Number(secondInput);
    resultsDisplayText=calculateNow(firstInputNumber,secondInputNumber,operator);
        console.log(`results = ${resultsDisplayText}`);

    firstInput = "";
    secondInput = "";
    inputDisplayText = "";
    resultsDisplayText = "";
    isOperatorClicked = false;
    operator = "";
    // changeSignDisplay = "";
});

