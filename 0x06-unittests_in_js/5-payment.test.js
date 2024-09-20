const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('Verify that the console is logging the string and called once', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
  });

  it('Verify that the console is logging the string and called once', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
  });
})
