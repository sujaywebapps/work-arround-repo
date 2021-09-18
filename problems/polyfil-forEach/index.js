// Polyfil for foreach
Array.prototype.custForEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    return func.call(this[i], i);
  }
};
