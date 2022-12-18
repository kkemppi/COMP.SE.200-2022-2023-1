import { assert, expect } from 'chai';
import reduce from '../src/reduce.js';

describe('#reduce', function(){
    it('should reduce the given array correctly', function(){
        const arr = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
               (result[value] || (result[value] = [])).push(key)
               return result
            }, {})
        const expected =  { '1': ['a', 'c'], '2': ['b'] };
        expect(arr).to.deep.equal(expected);
    });
    it('should work with different types of keys', function() {
        const arr = reduce({ 'a': 2, 'b': null, 'c': 2  }, (result, value, key) => {
            (result[value] || (result[value] = [])).push(key)
            return result
         }, {})
        const expected =  { 2:['a','c'], null:['b'] };
        expect(arr).to.deep.equal(expected);
    });

});