let screen = document.getElementById('screen');
let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  screen.value = currentInput;
}

function appendOperator(operator) {
 if (currentInput === '' || /[+\-*/]$/.test(currentInput)) return;
  currentInput += operator;
  screen.value = currentInput;
}

function clearScreen() {
  currentInput = '';
  screen.value = '';
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString(); // evaluete the expression
    screen.value = currentInput;
  } catch (error) {
    screen.value = 'error';
  }
}
