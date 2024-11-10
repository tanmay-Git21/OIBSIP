let screen = document.getElementById('screen');
let currentInput = '';

// Append number to current input
function appendNumber(number) {
  currentInput += number;
  screen.value = currentInput;
}

// Append operator to current input
function appendOperator(operator) {
  if (currentInput === '' || /[+\-*/]$/.test(currentInput)) return;
  currentInput += operator;
  screen.value = currentInput;
}

// Clear screen
function clearScreen() {
  currentInput = '';
  screen.value = '';
}

// Evaluate the expression and display result
function calculate() {
  try {
    currentInput = eval(currentInput).toString();  // Evaluate the expression
    screen.value = currentInput;
  } catch (error) {
    screen.value = 'Error';
  }
}
