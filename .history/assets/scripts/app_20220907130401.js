const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function addition() {
  const enteredNumber = getUserNumberInput();
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput('+', resultBeforeCalc, calcNumber);
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
