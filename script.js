let currentText = "";
let oldText = "";
let operation = undefined;

function calculation() {
    let result;
    const firstNumber = parseFloat(oldText);
    const secondNumber = parseFloat(currentText);
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return;
    }
    switch (operation) {
        case "÷":
            if (secondNumber === 0) {
                output = "Undefined";
                break;
            } else {
                output = firstNumber / secondNumber;
                break;
            }
        case "%":
            output = (firstNumber / 100) * secondNumber;
            break;
        case "x":
            output = firstNumber * secondNumber;
            break;
        case "-":
            output = firstNumber - secondNumber;
            break;
        case "+":
            output = firstNumber + secondNumber;
            break;
        default:
            return;
    }
    currentText = output;
    oldText = "";
    operation = "";
}
const btnEqual = document.querySelector(".btn-equal");
btnEqual.addEventListener("click", () => {
    calculation();
    updateDisplay();
});

const typedText = document.querySelector(".typed-text");
const historyText = document.querySelector(".history-text");
function updateDisplay() {
    typedText.innerText = currentText;
    if (operation !== undefined) {
        historyText.innerText = `${oldText} ${operation}`;
    } else {
        historyText.innerText = "";
    }
}

function clear() {
    currentText = "";
    oldText = "";
    operation = undefined;
}

// Implementing AC button
const btnAC = document.querySelector(".all-clear");
btnAC.addEventListener("click", () => {
    clear();
    updateDisplay();
});

// Implementing Delete button
function del() {
    currentText = currentText.toString().slice(0, -1);
}

const btnDelete = document.querySelector(".btn-del");
btnDelete.addEventListener("click", () => {
    del();
    updateDisplay();
});

const btnNumber = document.querySelectorAll(".number");
btnNumber.forEach((button) => {
    button.addEventListener("click", () => {
        numberAppend(button.innerText);
        updateDisplay();
    });
});
function numberAppend(number) {
    if (number === "." && currentText.includes(".")) {
        return;
    }
    else if (number == "0" && currentText == "0") {
        return;
    }
    currentText = currentText.toString() + number.toString();
}

const btnHeart = document.querySelectorAll(".btn-heart")
btnHeart.forEach((button) => {
    button.addEventListener("click", () => {
        alert("Made with <3 by Görkem Uygun");
    });
});


function selectOperation(operator) {
    if (currentText === "") return;
    if (oldText !== "") {
        calculation();
    }
    operation = operator;
    oldText = currentText;
    currentText = "";
}
const btnOperator = document.querySelectorAll(".operator");
btnOperator.forEach((button) => {
    button.addEventListener("click", () => {
        selectOperation(button.innerText);
        updateDisplay();
    });
});
