

export function GenerateResultText(calculateResult){
    let resultText = '';

  if (result === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.';
  } else if (result !== 'no-calc') {
    resultText = 'Result: ' + calculateResult;
  }

  return result;
}

export function OutputResult(resultText){
    const output = document.getElementById('result');
    output.textContent = resultText;
}
