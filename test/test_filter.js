import { expect } from 'chai';
import filter from '../src/filter.js';

describe('#filter', function(){
    xit('should filter results that do not fulfill the predicate', function(){
        const testList = [{'name':'test1','pass': true}, {'name':'test2', 'pass': false}];
        const expected = [{'name':'test1','pass': true}];
        
        expect(filter(testList, ({pass}) => pass)).to.equal(expected);
    });
});