const defaultResult = 0;
let currentResult = defaultResult;

function addition(num1, num2) {
  const result = num1 + num2;
  return result;
}

addBtn.addEventListener('click', addition);

outputResult(currentResult, calculateDescription);
