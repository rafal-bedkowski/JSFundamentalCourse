const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function addition() {
  const enteredNumber = getUserNumberInput();
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescription);
}

function subtraction() {
  const enteredNumber = getUserNumberInput();
  const calcDescription = `${currentResult} - ${enteredNumber}`;
  currentResult = currentResult - enteredNumber;
  outputResult(currentResult, calcDescription);
}

function multiplication() {
  const enteredNumber = getUserNumberInput();
  const calcDescription = `${currentResult} * ${enteredNumber}`;
  currentResult = currentResult * enteredNumber;
  outputResult(currentResult, calcDescription);
}

function divided() {
  const enteredNumber = getUserNumberInput();
  const calcDescription = `${currentResult} / ${enteredNumber}`;
  currentResult = currentResult / enteredNumber;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', addition);
