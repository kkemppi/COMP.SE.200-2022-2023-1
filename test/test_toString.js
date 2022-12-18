import { expect } from 'chai';
import toString from '../src/toString.js';

describe('#toString', function(){
    xit('null returns empty string', function(){
        expect(toString(null)).to.equal('')
    });

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

    it('string returns itself', function(){
        expect(toString("abc")).to.equal('abc')
    });

    it('object returns object object', function(){
        expect(toString(new Object())).to.equal('[object Object]')
    });
});