const { expect } = require('chai');
const sinon = require('sinon');

const displayMessage = require('../../Assignment-7/callBackEx');

describe('displayMessage', () => {
    it('should call the callback with the message after 1 second', (done) => {
        const callback = sinon.spy();
        displayMessage(callback);
        setTimeout(() => {
            expect(callback.calledOnce).to.be.true;
            expect(callback.calledWith('callback triggered')).to.be.true;
            done();
        }, 1000);
    });
});
