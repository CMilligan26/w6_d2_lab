const assert = require('assert');
const Paint = require('../models/paint');

describe('Paint',function () {

  let paint;

  beforeEach(function () {
    paint = new Paint(0);
  });

  it('should have a number of litres of paint', function () {
    paint.litres = 2.5;
    assert.strictEqual(2.5, paint.litres);
  });

  it('should be able to check if it is empty', function () {
    assert.strictEqual(true, paint.checkIfEmpty());
  });

  it('should be able to empty itself of paint', function () {
    paint.emptyCan();
    assert.strictEqual(0, paint.litres);
  });
  });
