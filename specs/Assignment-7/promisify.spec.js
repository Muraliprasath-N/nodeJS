const chai = require('chai');
const { promisify } = require('util');
const { add, multiply } = require("../../Assignment-7/promisifyEx.js");
const expect = chai.expect;

const addPromise = promisify(add);
const multiplyPromise = promisify(multiply);

describe('Promisified Functions', () => {
    it('should resolve the sum correctly', () => {
        return addPromise(2, 3)
            .then((sum) => {
                expect(sum).to.equal(5);
            });
    });

    it('should resolve the product correctly', () => {
        return multiplyPromise(5, 10)
            .then((product) => {
                expect(product).to.equal(50);
            });
    });

    it('should calculate sum and then product', () => {
        return addPromise(2, 3)
            .then((sum) => multiplyPromise(sum, 10))
            .then((product) => {
                expect(product).to.equal(50);
            });
    });
});
