const defaultResult = 0;
let currentResult = defaultResult;


function getUserNumberInput(){
  return parseInt(userInput.value);
}

function addition() {
  const enteredNumber = 
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', addition);
