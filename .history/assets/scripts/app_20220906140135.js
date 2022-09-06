const defaultResult = 0;
let currentResult = defaultResult;

function addition(num1, num2) {
  const result = num1 + num2;
  return result;
}

currentResult = addition(10, 20);

let calculateDescription = `(${defaultResult} + 10 ) * 3 / 2 - 1 `;

outputResult(currentResult, calculateDescription);
