// Polyfil for filter
Array.prototype.custFilter = function (func, context) {
  let filteredArr = [];
  for (let i = 0; i < this.length; i++) {
    if (func.call(this, this[i], i, this)) {
      filteredArr.push(this[i]);
    }
    return filteredArr;
  }
};

const ab = [1, 2, 3, 4, 5, 6].filter((ele) => {
  return true;
});
