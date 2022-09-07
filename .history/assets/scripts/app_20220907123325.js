const defaultResult = 0;
let currentResult = defaultResult;

function addition() {
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, `${currentResult}`);
}

addBtn.addEventListener('click', addition);
