Array.prototype.custFind = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    if (callBack.call(this, this[i])) {
      return this[i];
    }
  }
};

const array1 = [5, 12, 8, 130, 44];

const found = array1.custFind((element) => element > 10);

console.log(found);
