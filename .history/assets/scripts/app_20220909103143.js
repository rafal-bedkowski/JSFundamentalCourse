const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//get the input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//generate and writes calclulation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //from vendor.js
}

function addition() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  const logEntry = {};
  logEntries.push(enteredNumber);
  console.log(logEntries[1]);
}

function subtraction() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiplication() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
}

function divided() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', addition);
subtractBtn.addEventListener('click', subtraction);
multiplyBtn.addEventListener('click', multiplication);
divideBtn.addEventListener('click', divided);
