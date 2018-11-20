const assert = require('assert');
const Decorator = require('../models/decorator');
const Paint = require('../models/paint');

describe('Decorator',function () {

  let decorator;

  beforeEach(function () {
    decorator = new Decorator();
  });

  it("should start with an empty paint stock", function () {
    assert.deepStrictEqual(decorator.paintStock,[]);
  });

  it("should be able to add a can of paint to paint stock", function () {
    let bukit = new Paint(2.5);
    decorator.addCan(bukit);
    assert.deepStrictEqual([bukit],decorator.paintStock);
  });

  it("should be able to calculate total litres paint it has in stock");

  it("should be able to calculate whether is has enough paint to paint a room");

  it("should be able to paint room if has enough paint in stock");

});
