import { expect } from 'chai';
import clamp from '../src/clamp.js';

describe('#clamp', function(){
    it('should clamp a number to given boundaries', function(){
        const testNumber = 100;
        const expected = 10;
        expect(clamp(1, 10, testNumber)).to.equal(expected);
    });
    it('should not clamp a number that is inside the boundaries', function(){
        const testNumber = -2;
        const expected = -2;
        expect(clamp(-10, 10, testNumber)).to.equal(expected);
    });
    it('should clamp a number that is smaller than the boundary', function(){
        const testNumber = -100;
        const expected = -10;
        expect(clamp(-10, 10, testNumber)).to.equal(expected);
    });
    it('should not clamp a number on the upper boundary', function(){
        const testNumber = 10;
        const expected = 10;
        expect(clamp(-10, 10, testNumber)).to.equal(expected);
    });
    it('should not clamp a number on the lower boundary', function(){
        const testNumber = -10;
        const expected = -10;
        expect(clamp(-10, 10, testNumber)).to.equal(expected);
    });
    


});