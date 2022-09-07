const defaultResult = 0;
let currentResult = defaultResult;

function addition() {
  const calcDescription = `${currentResult} + ${userInput.value}`;
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult);
}

addBtn.addEventListener('click', addition);
