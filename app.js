import { extractEnteredNumberValues } from './src/util/parser.js';
import { calculateResult } from './src/util/math.js';
import { GenerateResultText, OutputResult } from './src/util/Output.js';

const form = document.querySelector('form');


function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues =  extractEnteredNumberValues(form);

  let result = calculateResult(numberValues);
  const resultText = GenerateResultText(result);

  OutputResult(resultText);

}

form.addEventListener('submit', formSubmitHandler);
