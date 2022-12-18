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

    it('should return zero on zero', function(){
        expect(toNumber(0)).to.equal(0)
    });

    it('should return integer on booleans', function(){
        expect(toNumber(true)).to.equal(1)
        expect(toNumber(false)).to.equal(0)
    });

    it('infinity should return infinity', function(){
        expect(toNumber(Infinity)).to.equal(Infinity)
    });

    it('minimum should return "5e-324"', function(){
        expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324)
    });

    it('random string should return NAN', function(){
        var isnan = Number.isNaN(toNumber('abc'))
        expect(isnan)
    });

    it('symbol should return NAN', function(){
        var isnan = Number.isNaN(toNumber(Symbol('abc')))
        expect(isnan)
    });

    it('should clear leading and trailing whitespaces', function(){
        expect(toNumber("   123 ")).to.equal(123)
    });

    it('should return number from binary string', function(){
        expect(toNumber("0b01010101")).to.equal(85)
    });

    it('should return number from hexadecimal strings', function(){
        expect(toNumber("0x55")).to.equal(85)
    });

    it('should return NaN from bad hexadecimal strings', function(){
        var isnan = Number.isNaN(expect(toNumber("0x55g")))
        expect(isnan)
    });

    it('should return number from octal string', function(){
        expect(toNumber("0o125")).to.equal(85)
    });

    // Missing object type tests
});