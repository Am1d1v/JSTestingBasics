import { cleanNumber } from "./util/numbers";

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    // Convert all arguments in numbers
    sum += +number;

  }
  return sum;
}

export function calculateResult(){
  try {
    cleanNumber();
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
}
