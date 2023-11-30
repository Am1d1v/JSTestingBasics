import {it, expect} from 'vitest';
import {validateStringNotEmpty, validateNumber} from './validation'


it('Should yield an error if an empty string is provided', () => {
    const input = '';

    const validattionFn = () =>  validateStringNotEmpty(input);

    expect(validattionFn).toThrow();
})


it('Should yield an error if an empty string is provided', () => {
    const input = 1;

    const validattionFn = validateNumber(input);

    expect(validattionFn).toBeTypeOf("number");
})