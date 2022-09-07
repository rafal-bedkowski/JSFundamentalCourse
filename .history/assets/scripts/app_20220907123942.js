const defaultResult = 0;
let currentResult = defaultResult;

function addition() {
  const enteredNumber = parseInt(userInput.value);
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', addition);
