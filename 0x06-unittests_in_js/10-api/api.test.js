const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('API Endpoints', () => {

  const apiUrl = 'http://localhost:7865';

  describe('GET /', () => {
    it('should return a 200 status and the welcome message', (done) => {
      request({ url: `${apiUrl}/`, method: 'GET' }, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        expect(response.headers['content-type']).to.include('text/html');
        expect(error).to.be.null;
        done();
      });
    });
  });

  describe('GET /nonexistent', () => {
    it('should return a 404 status for non-existent routes', (done) => {
      request({ url: `${apiUrl}/nonexistent`, method: 'GET' }, (error, response) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/:id', () => {
    it('should return a 200 status and the correct response for a valid CartID', (done) => {
      request({ url: `${apiUrl}/cart/123`, method: 'GET' }, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 123');
        expect(response.headers['content-type']).to.include('text/html');
        done();
      });
    });

    it('should return a 404 status for an invalid CartID', (done) => {
      request({ url: `${apiUrl}/cart/asd`, method: 'GET' }, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        expect(body).to.equal('Invalid cart ID. Must be a positive integer.');
        expect(response.headers['content-type']).to.include('text/html');
        done();
      });
    });
  });

  describe('GET /available_payments', () => {
    it('should return a 200 status and the correct response for available_payments', (done) => {
      request({ url: `${apiUrl}/available_payments`, method: 'GET' }, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        const parsedBody = JSON.parse(body);
        expect(parsedBody).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        expect(response.headers['content-type']).to.include('application/json');
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('should return a 200 status and a welcome message with the username', (done) => {
      const postData = { userName: 'JohnDoe' };
      request({ url: `${apiUrl}/login`, method: 'POST', json: postData }, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome JohnDoe');
        expect(response.headers['content-type']).to.include('text/html');
        expect(error).to.be.null;
        done();
      });
    });
  });

});
