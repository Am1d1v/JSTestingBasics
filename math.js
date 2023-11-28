export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    // Convert all arguments in numbers
    sum += +number;

  }
  return sum;
}
