const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-1, -3), -4);
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
  });

  it('should handle zero', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0, 3.7), 4);
    assert.strictEqual(calculateNumber(-1.5, 0), -1);
  });

  it('should round floating point numbers correctly', () => {
    assert.strictEqual(calculateNumber(2.4, 2.4), 4);
    assert.strictEqual(calculateNumber(2.6, 2.6), 6);
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
  });
});
