let display = document.getElementById("display");
let currentInput = "";
let operator = "";

function appendSymbol(symbol) {
    if (symbol === '.' && currentInput.includes('.')) {
        return; // Avoid adding multiple decimals
    }

    currentInput += symbol;
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    operator = "";
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        display.innerHTML = "Error";
    }
}

function updateDisplay() {
    display.innerHTML = currentInput;
}
