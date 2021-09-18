// Polyfil for reduce
Array.prototype.custReducer = function (callBack, initialValue) {
  let acc = initialValue === undefined ? undefined : initialValue;
  for (let i = 0; i < this.length; i++) {
    if (acc !== undefined) {
      acc = callBack.call(this, acc, this[i], i, this);
    } else {
      acc = this[i];
    }
  }
  return acc;
};
