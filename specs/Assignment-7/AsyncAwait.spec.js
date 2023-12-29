const { expect } = require('chai');
const { fetchData, displayInConsole } = require('../../Assignment-7/AsyncAwait');
const sinon = require("sinon");

describe('fetchData', () => {
    it('should fetch data from Google', async () => {
        const data = await fetchData();
        expect(data).to.be.a('string'); 
    });
});

describe('displayInConsole', () => {
    it('should display fetched data in the console', async () => {
        const consoleSpy = sinon.spy(console, 'log');

        await displayInConsole();

        expect(consoleSpy.calledOnce).to.be.true;
        consoleSpy.restore();
    });
});
