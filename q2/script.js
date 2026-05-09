const display = document.getElementById('display');

// Adds numbers or operators to the display
function appendToDisplay(input) {
    display.value += input;
}

// Clears the entire screen
function clearDisplay() {
    display.value = "";
}

// Removes the last character entered
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Performs the calculation
function calculate() {
    try {
        // eval() takes the string (e.g., "5+5") and calculates it
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        // Reset after 1.5 seconds if there's an error
        setTimeout(clearDisplay, 1500);
    }
}
