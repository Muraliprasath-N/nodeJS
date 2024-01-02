const { expect } = require('chai');
const mockStdin = require('mock-stdin');
const { log } = require('npmlog');
const sinon = require('sinon');
const printUserInput = require('../../Assignment-9/EventEx');

describe('keypress event', () => {
    let logSpy;
    let stdin;
    before(() => {
        logSpy = sinon.spy(console, 'log');
        stdin = new mockStdin.stdin();
    });
    after(() => {
        logSpy.restore();
        stdin.restore();
    });

    it('should print same key that pressed', (done) => {
        printUserInput();
        setTimeout(() => {
            stdin.send('j');

            setTimeout(() => {
                expect(logSpy.calledOnceWith('Key pressed: j')).to.be.true;
                done()
            }, 100)
        }, 100);
    });
});