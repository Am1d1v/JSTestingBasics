import { describe, it, expect} from 'vitest';
import { transformToNumber, cleanNumber } from './numbers'; 

describe('transformToNumber', () => {

    it('Should transform a string number to a number of type number', () => {
        const input = '1';
    
        const result = transformToNumber(input);
    
        expect(result).toBeTypeOf('number');
    });
    
    // Multiple Expectations
    it('Should yield NaN for non-transformable values', () => {
        const input = 'invalid';
        const input2 = {};
    
        const result1 = transformToNumber(input);
        const result2 = transformToNumber(input2);
        
    
        expect(result1).toBeNaN();
        expect(result2).toBeNaN();
    });
})

describe('cleanNumber', () => {
    it('should return an array number values if an array of string number values is provided', () => {
        const numberValues = ['1', '2', '3'];
        const cleanedNumbers =  cleanNumber(numberValues);

        expect(cleanedNumbers[0]).toBeTypeOf('number');
    });
});