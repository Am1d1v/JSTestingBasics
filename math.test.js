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


it('Should yield NaN if a least one invalid number is provided', () => {
    const inputs = ['invalid', 1];

    const result = add(inputs);

    expect(result).toBeNaN();
});


it('Should yield a correct sum if an array of numeric string values is provided', () => {
    const inputs = ['1', '2', '3'];

    const result = add(inputs);

    const expectedResult = inputs.reduce((previousValue, nextValue) => {
        return +previousValue + +nextValue
    }, 0)

    expect(result).toBe(expectedResult);
})


it('Should yield 0 if an epmty array is provided', () => {
    const inputs = [];

    const result = add(inputs);

    expect(result).toBe(0);
});


// it('Should should throw an error if no value is passed into the function', () => {
//     try{
        
//         const result = add();
//     } catch(error) {
//         expect(error).toBeDefined()
//     }
// });

// If we add 'not' now test fails because we get unexpected error
it('Should should throw an error if no value is passed into the function', () => {
    const resultFn = () => {
        add();
    }

    //expect(resultFn).toThrow();
    expect(resultFn).not.toThrow();
});






