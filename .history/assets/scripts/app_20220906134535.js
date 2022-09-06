const defaultResult = 0;
let currentResult = defaultResult;

function addition(num1, num2) {
  const result = num1 + num2;
  console.log(result);
}

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculateDescription = `(${defaultResult} + 10 ) * 3 / 2 - 1 `;

outputResult(currentResult, calculateDescription);

addition(10, 20);
