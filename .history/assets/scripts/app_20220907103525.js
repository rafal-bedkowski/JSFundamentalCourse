const defaultResult = 0;
let currentResult = defaultResult;

function addition() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, calculateDescription);
}

addBtn.addEventListener('click', addition);
