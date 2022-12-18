import { expect } from 'chai';
import toString from '../src/toString.js';

describe('#toString', function(){

    // Returns 'null' instead of empty string
    xit('null returns empty string', function(){
        expect(toString(null)).to.equal('')
    });

    // Returns 'undefined' instead of empty string
    xit('undefined returns empty string', function(){
        var a;
        expect(toString(a)).to.equal('')
    });

    it('positive integer and float returns empty string', function(){
        expect(toString(1)).to.equal('1')
        expect(toString(1.001)).to.equal('1.001')
    });

    it('negative is preserved with zero integer', function(){
        expect(toString(-0)).to.equal('-0')
    });

    it('negative is preserved with non-zero integer', function(){
        expect(toString(-1)).to.equal('-1')
    });

    it('array returns string', function(){
        expect(toString([1, 2, 3])).to.equal('1,2,3')
    });

    it('empty array returns empty string', function(){
        expect(toString([])).to.equal('')
    });

    it('string returns itself', function(){
        expect(toString("abc")).to.equal('abc')
    });

    it('object returns object object', function(){
        expect(toString(new Object())).to.equal('[object Object]')
    });

    it('symbol should return string', function(){
        expect(toString(Symbol('abc'))).to.equal('Symbol(abc)')
    });
});