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

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(callculationType) {
  if (
    callculationType !== 'ADD' &&
    callculationType !== 'SUBTRACT' &&
    callculationType !== 'MULTIPLICATION' &&
    callculationType !== 'DIVIDED'
  ) {
    return; //if calcType are not valid the if statement will return, the rest of the code will be not executed
  }

  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (callculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (callculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (callculationType === 'MULTIPLICATION') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (callculationType === 'DIVIDED') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(callculationType, initialResult, enteredNumber, currentResult);
}

function addition() {
  calculateResult('ADD');
}

function subtraction() {
  calculateResult('SUBTRACT');
}

function multiplication() {
  calculateResult('MULTIPLICATION');
}

function divided() {
  calculateResult('DIVIDED');
}

addBtn.addEventListener('click', addition);
subtractBtn.addEventListener('click', subtraction);
multiplyBtn.addEventListener('click', multiplication);
divideBtn.addEventListener('click', divided);
