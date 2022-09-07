const defaultResult = 0;
let currentResult = defaultResult;

function addition() {
  const result = currentResult + userInput;
  return result;
}

addBtn.addEventListener('click', addition);

outputResult(currentResult, calculateDescription);
