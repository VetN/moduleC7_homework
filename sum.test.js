let sum = require('./sum.js');
let assert = require('assert');


describe("test calculation multiplic", () => {
    it("mult 2*3", () => {
        const expected = 6;
        const result = sum.mult(2, 3);
        assert.equal(result, expected);
    });
    it("mult 3*3", () => {
        const expected = 9;
        const result = sum.mult(3, 3);
        assert.equal(result, expected);
    });
});

describe("test calculation sum", () => {
    it("sum 2 + 3", () => {
        const expected = 5;
        const result_1 = sum.sumNum(2, 3);
        assert.equal(result_1, expected);
    });
});
   
describe("invert string", () => {
    it("abcde --> edcba", () => {
        const expected = 'edcba';
        const result = sum.revString('abcde');
        assert.equal(result, expected);
    });
    it("Dog --> goD", () => {
        const expected = 'goD';
        const result = sum.revString('Dog');
        assert.equal(result, expected);
    });
    it("12345 --> 54321", () => {
        const expected = '54321';
        const result = sum.revString('12345');
        assert.equal(result, expected);
    });
});
