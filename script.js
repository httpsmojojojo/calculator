let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let operator = null;

function appendToDisplay(value) {
    if (value === '.' && displayValue.includes('.')) return; // Prevent multiple decimals
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    firstOperand = null;
    secondOperand = null;
    operator = null;
    updateDisplay();
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function setOperator(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
    } else if (operator) {
        secondOperand = parseFloat(displayValue);
        firstOperand = operate(operator, firstOperand, secondOperand);
    }
    operator = op;
    displayValue = ''; // Clear display for next number
}

function calculateResult() {
    if (operator && displayValue) {
        secondOperand = parseFloat(displayValue);
        if (operator === '/' && secondOperand === 0) {
            alert("You can't divide by 0!");
            clearDisplay();
            return;
        }
        const result = operate(operator, firstOperand, secondOperand);
        displayValue = result.toString();
        firstOperand = result; // For chaining calculations
        operator = null; // Reset operator after calculation
        updateDisplay();
    }
}

function operate(op, a, b) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return b;
    }
}
