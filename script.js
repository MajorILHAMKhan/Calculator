const display = document.getElementById('display');
let currentInput = "";

function updateDisplay() {
    display.textContent = currentInput || "0";
}

function appendValue(value) {
    if (value === '±') {
        if (currentInput) currentInput = String(-parseFloat(currentInput));
    } else if (value === '%') {
        if (currentInput) currentInput = String(parseFloat(currentInput) / 100);
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    updateDisplay();
}

function calculate() {
    try {
        currentInput = String(eval(currentInput));
    } catch {
        currentInput = "Error";
    }
    updateDisplay();
}

// Keyboard support
document.addEventListener("keydown", (e) => {
    if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
        appendValue(e.key);
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    } else if (e.key === "Escape") {
        clearDisplay();
    }
});

// Theme toggle
function toggleTheme() {
    document.body.classList.toggle("light");
}