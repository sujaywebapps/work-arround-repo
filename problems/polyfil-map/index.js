// Polyfil for map

Array.prototype.custMap = function (callBack) {
  let returnArray = [];
  for (let i = 0; i < this.length; i++) {
    returnArray.push(callBack.call(this, this[i], i));
  }
  return returnArray;
};

const a = [1, 2, 3, 4, 5].map((ele, i) => {
  return ele;
});
