import {it, expect, describe} from 'vitest';
import {validateStringNotEmpty, validateNumber} from './validation'

// Validation Test Suites
describe('validateNumber()', () => {

    it('Should yield a type of input', () => {
        const input = 1;
    
        const validattionFn = validateNumber(input);
    
        expect(validattionFn).toBeTypeOf("number");
    })
    
    
    it('Should yield an error if non-numeric values is provided', () => {
        const input = '1';
    
        const validattionFn = () => validateNumber(input);
    
        expect(validattionFn).not.toThrow();
    })

});

describe('validateStringNotEmpty()', () => {

    it('Should yield an error if an empty string is provided', () => {
        const input = '';
    
        const validattionFn = () =>  validateStringNotEmpty(input);
    
        expect(validattionFn).toThrow();
    })

})

// it('Should yield an error if an empty string is provided', () => {
//     const input = '';

//     const validattionFn = () =>  validateStringNotEmpty(input);

//     expect(validattionFn).toThrow();
// })


// it('Should yield a type of input', () => {
//     const input = 1;

//     const validattionFn = validateNumber(input);

//     expect(validattionFn).toBeTypeOf("number");
// })


// it('Should yield an error if non-numeric values is provided', () => {
//     const input = '1';

//     const validattionFn = () => validateNumber(input);

//     expect(validattionFn).not.toThrow();
// })