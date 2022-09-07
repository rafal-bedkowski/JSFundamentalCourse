const defaultResult = 0;
let currentResult = defaultResult;

function addition() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, '');
}

addBtn.addEventListener('click', addition);
