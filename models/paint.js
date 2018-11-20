const Paint = function (litres) {
  this.litres = litres;
};

Paint.prototype.checkIfEmpty = function () {
  if (this.litres === 0) {return true;}
  return false;
};

Paint.prototype.emptyCan = function () {
  Paint.litres = 0;
};

module.exports = Paint;
