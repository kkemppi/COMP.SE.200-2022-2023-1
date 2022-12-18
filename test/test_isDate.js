import { expect } from 'chai';
import isDate from '../src/isDate.js';

describe('#isDate', function(){
    it('should return true with Date object', function(){
        const date = new Date();
        expect(isDate(date)).to.equal(true);
    });
    it('should return false with valueAsDate', function() {
        const date = Date("12-12-2022");
        const newDate = date.valueAsDate;       
        expect(isDate(newDate)).to.equal(false);
    });
    it('should return false with string of a date', function() {
        const date = "12-12-2022";
        expect(isDate(date)).to.equal(false);
    });
});