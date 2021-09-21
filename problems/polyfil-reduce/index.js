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

const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.custReducer(reducer));
