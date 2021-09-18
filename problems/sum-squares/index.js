// 100 + 100 + 100 + 100 = 400

function sumSquares(arr, r = 0) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      r = sumSquares(arr[i], r);
    } else {
      r += arr[i] * arr[i];
    }
  }
  return r;
}

console.log(sumSquares([10, [[10], 10], [10]]));
