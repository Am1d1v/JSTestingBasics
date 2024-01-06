import { extractEnteredNumberValues } from './parser.js';
import { calculateResult } from './math.js';
import { GenerateResultText, OutputResult } from './Output.js';

const form = document.querySelector('form');


function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues =  extractEnteredNumberValues(form);

  let result = calculateResult(numberValues);
  const resultText = GenerateResultText(result);

  OutputResult(resultText);

}

form.addEventListener('submit', formSubmitHandler);
