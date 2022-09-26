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
const numberThree = document.querySelector("#num-3");
const numberFour = document.querySelector("#num-4");
const numberFive = document.querySelector("#num-5");
const numberSix = document.querySelector("#num-6");
const numberSeven = document.querySelector("#num-7");
const numberEight = document.querySelector("#num-8");
const numberNine = document.querySelector("#num-9");
const decimal = document.querySelector("#num-decimal");

const oprAdd = document.querySelector("#opr-add");
const oprSubstract = document.querySelector("#opr-substract");
const oprMultiply = document.querySelector("#opr-multiply");
const oprDivide = document.querySelector("#opr-divide");
const oprPercentage = document.querySelector("#opr-percentage");
const oprRoot = document.querySelector("#opr-root");
const actionBkSpace = document.querySelector("#opr-bkspace");
const actionCancel = document.querySelector("#opr-cancel");
// const actionChangeSign = document.querySelector("#changesign");
const actionCalculate = document.querySelector("#opr-calculate");

const inputDisplay = document.querySelector(".input-display");
const resultsDisplay = document.querySelector(".results-display");

console.log("numbers and operators %,/,*,-,+,√ working");

// initialize variables
// let results = 0;
let firstInput = "";
let secondInput = "";
let inputDisplayText = "";
let resultsDisplayText = "";
let operator = "";
let changeSignDisplay = "";
let isNumberClicked = false;
let isDecimalClicked = false;
let isOperatorClicked = false;
let isChangeSignClicked = false;


// intializeParam() FUNCTION initialize all parameters after calculation
const initializeParam = () => {
    firstInput = "";
    secondInput = "";
    inputDisplayText = "";
    resultsDisplayText = "";
    operator = "";
    changeSignDisplay = "";
    isNumberClicked = false;
    isDecimalClicked = false;
    isOperatorClicked = false;
    isChangeSignClicked = false;

};

// isFirstClick() FUNCTION to check if a number has been clicked for first time

// calculateNow FUNCTION using two numbers and operator when opr-Calculate clicked and changes text for HTML classes input-display and results-display
const calculateNow = (first, second, operation) => {
    //change to return a variable and not explicit return
    // let results;
    // let errorMsg = 0;
    // console.log(`first number is ${first}`);
    // console.log(`first number is ${second}`);
    console.log(`Operator is ${operation}`);
    console.log(`first input in func ${first} (${typeof first})`);
    console.log(`second input in func ${second} (${typeof second})`);
    switch (operation) {
        case "+":
            results = (first + second);
// console.log("in case addition " + results);
            break;
        case "-":
            results = (first - second);
// console.log("in case multiplication");
            break;
        case "*":
// console.log("in case multiplication");
            results = (first * second);
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
        case "%":
// console.log("in case percentage");
            results = (first*(second/100));
            break;
        case "√":
// console.log("in case power")
            results = Math.pow(first, 1/second).toFixed(2);
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

    inputDisplay.innerHTML = inputDisplayText;
});
oprSubstract.addEventListener("click", () => {
    operator = "-";
    isOperatorClicked = true;
    inputDisplayText = inputDisplayText + operator;

console.log(`opr variable on click is ${operator}`);

    inputDisplay.innerHTML = inputDisplayText;  
});
oprMultiply.addEventListener("click", () => {
    operator = "*";
    isOperatorClicked = true;
    inputDisplayText = `${inputDisplayText}x`;

console.log(`opr variable on click is ${operator}`);

    inputDisplay.innerHTML = inputDisplayText;

});
oprDivide.addEventListener("click", () => {
    operator = "/";
    isOperatorClicked = true;
    inputDisplayText = inputDisplayText + operator;

console.log(`opr variable on click is ${operator}`);

    inputDisplay.innerHTML = inputDisplayText;
});
oprPercentage.addEventListener("click", () => {
    operator = "%";
    isOperatorClicked = true;
    inputDisplayText = inputDisplayText + operator;
        
console.log(`opr variable on click is ${operator}`);

    inputDisplay.innerHTML = inputDisplayText;
});
oprRoot.addEventListener("click", () => {
    operator = "√";
    isOperatorClicked = true;
    inputDisplayText = inputDisplayText + operator;
        
console.log(`opr variable on click is ${operator}`);

    inputDisplay.innerHTML = inputDisplayText;
});
actionCancel.addEventListener("click", () => {

    inputDisplayText = "0";
    resultsDisplayText = "0";
console.log(`input display text on click is ${inputDisplayText}!`);
    inputDisplay.innerHTML = inputDisplayText;
    resultsDisplay.innerHTML = resultsDisplayText;
    initializeParam();
});
// Get NUMBER values
decimal.addEventListener("click", () => {
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + ".";
        inputDisplayText = inputDisplayText + ".";
    } else if (!isDecimalClicked){
        firstInput = firstInput + ".";
        inputDisplayText = inputDisplayText + ".";
        isDecimalClicked = true;
    } else {
        firstInput = firstInput;
        inputDisplayText = inputDisplayText;
    }

console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);

    inputDisplay.innerHTML = inputDisplayText;

console.log(`inputDisplayText = ${inputDisplayText}`);
});
numberZero.addEventListener("click", () => {
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "0";
        inputDisplayText = inputDisplayText + "0";
    } else if (inputDisplay = "0") {
        firstInput = firstInput + "0";
        inputDisplayText = inputDisplayText;
    };

console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);

    inputDisplay.innerHTML = inputDisplayText;

console.log(`inputDisplayText = ${inputDisplayText}`);
});
numberOne.addEventListener("click", () => {
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "1";
        inputDisplayText = inputDisplayText + "1";
    } else {
        firstInput = firstInput + "1";
        inputDisplayText = inputDisplayText + "1";
    }

console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);

    inputDisplay.innerHTML = inputDisplayText;

console.log(`inputDisplayText = ${inputDisplayText}`);
});
numberTwo.addEventListener("click", () => {
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "2";
        inputDisplayText = inputDisplayText + "2";
    } else {
        firstInput = firstInput + "2";''
        inputDisplayText = inputDisplayText + "2";
    }
        
console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);

    inputDisplay.innerHTML = inputDisplayText;
});
numberThree.addEventListener("click", () => {
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "3";
        inputDisplayText = inputDisplayText + "3";
    } else {
        firstInput = firstInput + "3";
        inputDisplayText = inputDisplayText + "3";
    }
        
console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);

    inputDisplay.innerHTML = inputDisplayText;
});
numberFour.addEventListener("click", () => {
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "4";
        inputDisplayText = inputDisplayText + "4";
    } else {
        firstInput = firstInput + "4";
        inputDisplayText = inputDisplayText + "4";
    }
        
console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);

    inputDisplay.innerHTML = inputDisplayText;
});
numberFive.addEventListener("click", () => {
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "5";
        inputDisplayText = inputDisplayText + "5";
    } else {
        firstInput = firstInput + "5";
        inputDisplayText = inputDisplayText + "5";
    }
        
console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    
    inputDisplay.innerHTML = inputDisplayText;
});
numberSix.addEventListener("click", () => {
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "6";
        inputDisplayText = inputDisplayText + "6";
    } else {
        firstInput = firstInput + "6";
        inputDisplayText = inputDisplayText + "6";
    }

console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);

    inputDisplay.innerHTML = inputDisplayText;
});
numberSeven.addEventListener("click", () => {
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "7";
        inputDisplayText = inputDisplayText + "7";
    } else {
        firstInput = firstInput + "7";
        inputDisplayText = inputDisplayText + "7";
    }

console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);

    inputDisplay.innerHTML = inputDisplayText;
});
numberEight.addEventListener("click", () => {
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "8";
        inputDisplayText = inputDisplayText + "8";
    } else {
        firstInput = firstInput + "8";
        inputDisplayText = inputDisplayText + "8";
    }
 
console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);

    inputDisplay.innerHTML = inputDisplayText;
});
numberNine.addEventListener("click", () => {
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "9";
        inputDisplayText = inputDisplayText + "9";
    } else {
        firstInput = firstInput + "9";
        inputDisplayText = inputDisplayText + "9";
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

    resultsDisplay.innerHTML = resultsDisplayText;
    initializeParam();
});