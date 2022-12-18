import { expect } from 'chai';
import getTag from '../src/.internal/getTag.js';
import isEmpty from '../src/isEmpty.js';

describe('#isEmpty', function(){
    it('null is empty', function(){
        expect(isEmpty(null)).to.equal(true);
    });

    it('boolean is empty', function(){
        expect(isEmpty(true)).to.equal(true);
    });

    it('integer is empty', function(){
        expect(isEmpty(1)).to.equal(true);
    });

    it('float is empty', function(){
        expect(isEmpty(1.1)).to.equal(true);
    });

    it('empty array is empty', function(){
        expect(isEmpty([])).to.equal(true);
    });

    it('filled array is not empty', function(){
        expect(isEmpty([1, 2, 3])).to.equal(false);
    });

    it('empty map is empty', function(){
        expect(isEmpty({})).to.equal(true);
    });
      
    it('filled map is not empty', function(){
        expect(isEmpty({'a': 1})).to.equal(false);
    });

    it('empty map object is empty', function(){
        const testMap = new Map();
        expect(isEmpty(testMap)).to.equal(true);
    });

    it('filled map object is not empty', function(){
        const testMap = new Map([
            [1, 'one'],
            [2, 'two'],
            [3, 'three'],
        ]);
        expect(isEmpty(testMap)).to.equal(false);
    });

    it('empty set object is empty', function(){
        const testSet = new Set();
        expect(isEmpty(testSet)).to.equal(true);
    });

    it('filled set object is not empty', function(){
        const testSet = new Set([1, 2, 3]);
        expect(isEmpty(testSet)).to.equal(false);
    });

    it('empty string is empty', function(){
        expect(isEmpty("")).to.equal(true);
    });

    it('filled string is not empty', function(){
        expect(isEmpty("abc")).to.equal(false);
    });

    it('empty char is empty', function(){
        expect(isEmpty('')).to.equal(true);
    });

    it('filled char is not empty', function(){
        expect(isEmpty('a')).to.equal(false);
    });

    it('empty buffer is empty', function(){
        expect(isEmpty(Buffer.alloc(0))).to.equal(true);
    });

    it('filled buffer is not empty', function(){
        const buf = Buffer.alloc(6)
        expect(isEmpty(buf)).to.equal(false);
    });

    it('empty arguments is empty', function(){
        function test() {
            expect(isEmpty(arguments)).to.equal(true);
        };
        test();
    });

    it('filled arguments is not empty', function(){
        function test(a, b, c) {
            expect(isEmpty(arguments)).to.equal(false);
        };
        test('a', 'b', 'c');
    });

    it('empty typed array is empty', function(){
        const array = new Int8Array(0)
        expect(isEmpty(array)).to.equal(true);
    });

    it('filled typed array is not empty', function(){
        const array = new Int8Array(8)
        expect(isEmpty(array)).to.equal(false);
    });

    it('empty prototype is empty', function(){
        const testObject = new Object()
        expect(isEmpty(Object.getPrototypeOf(testObject))).to.equal(true);
    });

    it('filled prototype is not empty', function(){
        const test = {
            a: '1',
            testFunk: function() {
              console.log("test");
            }
          };
        expect(isEmpty(test)).to.equal(false);
    });

});