let currentInput = '';
let currentOperator = '';
let resultElement = document.getElementById('result');

function appendNumber(number) {
  currentInput += number;
  updateDisplay(currentInput);
}

function operate(operator) {
  if (currentOperator !== '' && currentInput !== '') {
    calculate();
  }
  currentOperator = operator;
  currentInput = '';
}

function calculate() {
  if (currentInput === '' || currentOperator === '') {
    return;
  }
  
  let result = 0;
  switch (currentOperator) {
    case '+':
      result = parseFloat(resultElement.value) + parseFloat(currentInput);
      break;
    case '-':
      result = parseFloat(resultElement.value) - parseFloat(currentInput);
      break;
    case '*':
      result = parseFloat(resultElement.value) * parseFloat(currentInput);
      break;
    case '/':
      result = parseFloat(resultElement.value) / parseFloat(currentInput);
      break;
  }

  updateDisplay(result);
  currentInput = '';
  currentOperator = '';
}

function clearDisplay() {
  currentInput = '';
  currentOperator = '';
  updateDisplay('');
}

function updateDisplay(value) {
  resultElement.value = value;
}

clearDisplay();
