import { expect } from 'chai';
import toNumber from '../src/toNumber.js';

describe('#toNumber', function(){
    it('integer and float should return themselves', function(){
        expect(toNumber(1)).to.equal(1)
        expect(toNumber(1.0001)).to.equal(1.0001)
    });

    it('number strings return correctly', function(){
        expect(toNumber("1")).to.equal(1)
        expect(toNumber("1.0001")).to.equal(1.0001)
    });

    it('infinity should return infinity', function(){
        expect(toNumber(Infinity)).to.equal(Infinity)
    });

    it('minimum should return "5e-324"', function(){
        expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324)
    });

    it('string should return NAN', function(){
        var isnan = Number.isNaN(toNumber('abc'))
        expect(isnan)
    });

    // TODO: Binary, octal and hexadecimal tests

});