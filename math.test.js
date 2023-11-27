import {it, expect} from 'vitest';
import {add} from '../math'

it('Should summarize all number values in an array', () => {
    // Using The AAA Patern

    // Arrange
    const numbers = [1, 2, 3];
    const expectedResult = numbers.reduce((previousValue, nextValue) => {
        return previousValue + nextValue
    }, 0)

    // Act
    const result =  add(numbers);

    // Assert
    expect(result).toBe(expectedResult);
});