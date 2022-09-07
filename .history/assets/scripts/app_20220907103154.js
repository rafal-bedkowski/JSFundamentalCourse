const defaultResult = 0;
let currentResult = defaultResult;

function addition() {
  currentResult = currentResult + userInput.value;
  return result;
}

addBtn.addEventListener('click', addition);

outputResult(currentResult, calculateDescription);
