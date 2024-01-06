import { cleanNumber } from "./src/util/numbers";

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    // Convert all arguments in numbers
    sum += +number;

  }
  return sum;
}

export function calculateResult(numberValues){
  let result = '';

  try {
    const numbers = cleanNumber(numberValues);
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }

  return result;
}
