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
let isFirstNumber = false;
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
    isFirstNumber = false;
    isDecimalClicked = false;
    isOperatorClicked = false;
    isChangeSignClicked = false;
    resultsDisplay.style.fontSize = "35px";

};

// changeFirstClick() FUNCTION to check if a number has been clicked for first time
const changeFirstClick = () => {
    if (!isFirstNumber) {
        isFirstNumber = true;
        return;
    }
}
// calculateNow FUNCTION using two numbers and operator when opr-Calculate clicked and changes text for HTML classes input-display and results-display
const calculateNow = (first, second, operation) => {
    //change to return a variable and not explicit return
    // let results;
    let errorMsg = 0;
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
console.log("in division by 0");
                errorMsg = 1;
                results = "Error: Division by 0 not permitted";
console.log("in div" + results);
                resultsDisplay.style.fontSize = "15px";
                break;
            } else {
// console.log("in non-zero division")
                results = first/second;
            }
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
    if (!isOperatorClicked) {
        operator = "+";
        isOperatorClicked = true;
        isDecimalClicked = false;
        inputDisplayText = inputDisplayText + operator;
    }
console.log(`opr variable on click is ${operator}`);
    inputDisplay.innerHTML = inputDisplayText;
});
oprSubstract.addEventListener("click", () => {
    if (!isOperatorClicked) {
        operator = "-";
        isOperatorClicked = true;
        isDecimalClicked = false;
        inputDisplayText = inputDisplayText + operator;
    }

console.log(`opr variable on click is ${operator}`);
    inputDisplay.innerHTML = inputDisplayText;  
});
oprMultiply.addEventListener("click", () => {
    if (!isOperatorClicked) {
        operator = "*";
        isOperatorClicked = true;
        isDecimalClicked = false;
        inputDisplayText = `${inputDisplayText}x`;
    }
console.log(`opr variable on click is ${operator}`);
    inputDisplay.innerHTML = inputDisplayText;

});
oprDivide.addEventListener("click", () => {
    if (!isOperatorClicked) {
        operator = "/";
        isOperatorClicked = true;
        isDecimalClicked = false;
        inputDisplayText = inputDisplayText + operator;
    }
console.log(`opr variable on click is ${operator}`);
    inputDisplay.innerHTML = inputDisplayText;
});
oprPercentage.addEventListener("click", () => {
    if (!isOperatorClicked) {
        operator = "%";
        isOperatorClicked = true;
        isDecimalClicked = false;
        inputDisplayText = inputDisplayText + operator;
    }
  
console.log(`opr variable on click is ${operator}`);
    inputDisplay.innerHTML = inputDisplayText;
});
oprRoot.addEventListener("click", () => {
    if (!isOperatorClicked) {   
        operator = "√";
        isOperatorClicked = true;
        isDecimalClicked = false;
        inputDisplayText = inputDisplayText + operator;
    }        
console.log(`opr variable on click is ${operator}`);
    inputDisplay.innerHTML = inputDisplayText;
});
actionCancel.addEventListener("click", () => {
    inputDisplayText = "0";
    resultsDisplayText = "0";
// console.log(`input display text on click is ${inputDisplayText}!`);
    inputDisplay.innerHTML = inputDisplayText;
    resultsDisplay.innerHTML = resultsDisplayText;
    initializeParam();
// console.log(`isFirstNumber= ${isFirstNumber}`);
});

// Get NUMBER values

//ORIGINAL DECIMAL
// decimal.addEventListener("click", () => {
//     if (!isDecimalClicked) {
//         if (firstInput != "" && isOperatorClicked) {
//             secondInput = secondInput + ".";
//             inputDisplayText = inputDisplayText + ".";
//             isDecimalClicked = true;
//         } else
//             firstInput = firstInput + ".";
//             inputDisplayText = inputDisplayText + ".";
//             isDecimalClicked = true;
//         }

// console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
// console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
// console.log(`inputDisplayText = ${inputDisplayText}`);
//     inputDisplay.innerHTML = inputDisplayText;
// });
decimal.addEventListener("click", () => {
console.log(`decimal clicked is ${isDecimalClicked}`)
    if (!isDecimalClicked) {
console.log(`in decimal operator clicked is ${isOperatorClicked}`)
        if (!isOperatorClicked) {
console.log(`in decimal before if first input is ${firstInput}`);
            if (firstInput === "") {
console.log(`in first input ="" before assigment firstinput=${firstInput}`);
                firstInput = firstInput + "0.";
                inputDisplayText = inputDisplayText + "0.";
console.log(`in first input="" new firstinput =${firstInput}`);
            } else {
console.log(`in first input !="" before assigment firstinput=${firstInput}`);
                firstInput = firstInput + ".";
                inputDisplayText = inputDisplayText + ".";
console.log(`in first input!="" new firstinput =${firstInput}`);
            }
        } else {
console.log(`in decimal before if second input is ${secondInput}`);
            if (secondInput === "") {
console.log(`in second input ="" before assigment secondinput=${secondInput}`);
                secondInput = secondInput + "0.";
                inputDisplayText = inputDisplayText + "0.";
console.log(`in second input="" new secondinput =${secondInput}`);
            } else {
console.log(`in second input !="" before assigment secondinput=${secondInput}`);
                secondInput = secondInput + ".";
                inputDisplayText = inputDisplayText + ".";
console.log(`in second input !="" new secondinput =${secondInput}`);
            }
        }
    };
    isDecimalClicked = true;
console.log(`in decimal first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
console.log(`in decimal second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
console.log(`in decimal inputDisplayText = ${inputDisplayText}`);
    inputDisplay.innerHTML = inputDisplayText;
});
numberZero.addEventListener("click", () => {
console.log(`0 isFirstNumber= ${isFirstNumber}`);
console.log(`0 firstInput= ${firstInput}`);
console.log(`0 isOperatorClick= ${isOperatorClicked}`);
    if (isFirstNumber) {
        if (firstInput != "" && isOperatorClicked) {
console.log("updating second input");
            secondInput = secondInput + "0";
            inputDisplayText = inputDisplayText + "0";
        } else {
console.log("updating first input");
            firstInput = firstInput + "0";
            inputDisplayText = inputDisplayText + "0";
        };
        inputDisplay.innerHTML = inputDisplayText;
        changeFirstClick();
    } 
    else {
console.log(`0 isFirstNumber= ${isFirstNumber} do not append`);
        inputDisplay.innerHTML = 0;
    }
// console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
// console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
// console.log(`inputDisplayText = ${inputDisplayText}`);
});
numberOne.addEventListener("click", () => {
console.log(`1 isFirstNumber= ${isFirstNumber}`);
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "1";
        inputDisplayText = inputDisplayText + "1";
    } else {
        firstInput = firstInput + "1";
        inputDisplayText = inputDisplayText + "1";
    }
    changeFirstClick();
    console.log(`1 after func isFirstNumber= ${isFirstNumber}`);
// console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
// console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
// console.log(`inputDisplayText = ${inputDisplayText}`);
});
numberTwo.addEventListener("click", () => {
console.log(`2 isFirstNumber= ${isFirstNumber}`);
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "2";
        inputDisplayText = inputDisplayText + "2";
    } else {
        firstInput = firstInput + "2";''
        inputDisplayText = inputDisplayText + "2";
    }    
// console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
// console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
});
numberThree.addEventListener("click", () => {
console.log(`3 isFirstNumber= ${isFirstNumber}`);
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "3";
        inputDisplayText = inputDisplayText + "3";
    } else {
        firstInput = firstInput + "3";
        inputDisplayText = inputDisplayText + "3";
    }      
// console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
// console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
});
numberFour.addEventListener("click", () => {
console.log(`4 isFirstNumber= ${isFirstNumber}`);
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "4";
        inputDisplayText = inputDisplayText + "4";
    } else {
        firstInput = firstInput + "4";
        inputDisplayText = inputDisplayText + "4";
    }
// console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
// console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
});
numberFive.addEventListener("click", () => {
console.log(`5 isFirstNumber= ${isFirstNumber}`);
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "5";
        inputDisplayText = inputDisplayText + "5";
    } else {
        firstInput = firstInput + "5";
        inputDisplayText = inputDisplayText + "5";
    }
// console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
// console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
});
numberSix.addEventListener("click", () => {
console.log(`6 isFirstNumber= ${isFirstNumber}`);
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "6";
        inputDisplayText = inputDisplayText + "6";
    } else {
        firstInput = firstInput + "6";
        inputDisplayText = inputDisplayText + "6";
    }
// console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
// console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
});
numberSeven.addEventListener("click", () => {
console.log(`7 isFirstNumber= ${isFirstNumber}`);
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "7";
        inputDisplayText = inputDisplayText + "7";
    } else {
        firstInput = firstInput + "7";
        inputDisplayText = inputDisplayText + "7";
    }
// console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
// console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
});
numberEight.addEventListener("click", () => {
console.log(`8 isFirstNumber= ${isFirstNumber}`);
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "8";
        inputDisplayText = inputDisplayText + "8";
    } else {
        firstInput = firstInput + "8";
        inputDisplayText = inputDisplayText + "8";
    }
// console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
// console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
});
numberNine.addEventListener("click", () => {
console.log(`9 isFirstNumber= ${isFirstNumber}`);
    changeFirstClick();
console.log(`after func isFirstNumber= ${isFirstNumber}`);
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "9";
        inputDisplayText = inputDisplayText + "9";
    } else {
        firstInput = firstInput + "9";
        inputDisplayText = inputDisplayText + "9";
    }
// console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
// console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
});
// numArray.forEach((num) => {
//     num.addEventListener("click" , () => num.append());
// });

// Calculate RESULTS on = click; initialize parameters
actionCalculate.addEventListener("click",function() {

console.log(`calculate input values are num1 ${firstInput} (${typeof firstInput}), opr ${operator}, num2 ${secondInput} (${typeof secondInput})`);

    const firstInputNumber = Number(firstInput);
    const secondInputNumber = Number(secondInput);
    resultsDisplayText=calculateNow(firstInputNumber,secondInputNumber,operator);

console.log(`calculate results = ${resultsDisplayText}`);

    resultsDisplay.innerHTML = resultsDisplayText;
    initializeParam();

});