let {assert} = require("chai");
let {isOddOrEven} = require("./02.EvenOrOdd");

describe('Even or Odd Tests', () => {
    it('should take string as argument', () => {

        assert.equal(typeof(""), 'string');
    });

    it('should return undefined if non-string is passed', () => {
        assert.equal(isOddOrEven(2), undefined);
        assert.equal(isOddOrEven([2]), undefined);
        assert.equal(isOddOrEven(['2']), undefined);
        assert.equal(isOddOrEven({}), undefined);
    });

    it('should return even if string length is even', () => {
        assert.equal(isOddOrEven('even'), 'even');
    });

    it('should return odd if string length is odd', () => {
        assert.equal(isOddOrEven('odd'),'odd');
    });
})