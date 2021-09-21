// Polyfil for foreach
Array.prototype.custForEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func.call(this, this[i], i);
  }
};

[1, 2, 3, 4, 5].custForEach((ele, i) => {
  console.log(ele, i);
});
