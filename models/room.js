const Room = function (area) {
  this.area = area;
  this.hasBeenPainted = false;
};

Room.prototype.paintRoom = function () {
  this.hasBeenPainted = true;
};

module.exports = Room;
