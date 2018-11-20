const Decorator = function () {
  this.paintStock = [];
};

Decorator.prototype.addCan = function (myCan) {
  this.paintStock.push(myCan);
};

module.exports = Decorator;
