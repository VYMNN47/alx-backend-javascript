const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('API', () => {
  it('Returns the correct response for GET /', (done) => {
    const options = {
      url: 'http://localhost:7865',
      method: 'GET',
    };

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      expect(response.headers['content-type']).to.include('text/html');
      expect(error).to.be.null;
      done();
    });
  });

  it('Returns 404 for non-existent routes', (done) => {
    const options = {
      url: 'http://localhost:7865/nonexistent',
      method: 'GET',
    };

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('Returns the correct response for GET /cart/:id', (done) => {
    const options = {
      url: 'http://localhost:7865/cart/123',
      method: 'GET',
    };

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 123');
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });

  it('Returns 404 response for incorrect CartID for GET /cart/:id', (done) => {
    const options = {
      url: 'http://localhost:7865/cart/asd',
      method: 'GET',
    };

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(body).to.equal('Invalid cart ID. Must be a positive integer.');
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });
});
