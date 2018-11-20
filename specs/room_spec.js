const assert = require('assert');
const Room = require('../models/room');

describe('Room',function () {

  let room;

  beforeEach(function () {
    room = new Room(100.0);
  });

  it('should have an area in square meters',function () {
    assert.strictEqual(room.area,100);
  });

  it('should start not painted', function () {
    assert.strictEqual(false,room.hasBeenPainted);
  });

  it('should be able to be painted', function () {
    room.paintRoom();
    assert.strictEqual(true,room.hasBeenPainted);
  });

});
