import { expect } from 'chai';
import get from '../src/get.js';

describe('#get', function(){
    it('should return the value at the end of the path', function(){
        const testObj = { 'a': [{ 'b': { 'c': 3 } }] };
        const expected = 3;
        expect(get(testObj, 'a[0].b.c')).to.equal(expected);
    });
    it('should defaultvalue when path does not exist', function(){
        const testObj = { 'a': [{ 'b': { 'c': 3 } }] };
        const expected = false;
        expect(get(testObj, 'a.b.c', false)).to.equal(expected);
    });
    it('should return undefined with null object', function(){
        const testObj = null;
        const expected = undefined;
        expect(get(testObj, 'a.b.c')).to.equal(expected);
    });
    

});