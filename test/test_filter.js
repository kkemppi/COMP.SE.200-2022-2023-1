import { expect } from 'chai';
import filter from '../src/filter.js';

describe('#filter', function(){
    it('should filter results that do not fulfill the predicate', function(){
        const testList = [{'name':'test1','pass': true}, {'name':'test2', 'pass': false}];
        const expected = [{'name':'test1','pass': true}];
        
        expect(filter(testList, ({pass}) => pass)).to.deep.equal(expected);
    });
    it('should return empty list with empty array', function(){
        const testList = [];
        const expected = [[]];
        
        expect(filter(testList, ({pass}) => pass)).to.deep.equal(expected);
    });
});