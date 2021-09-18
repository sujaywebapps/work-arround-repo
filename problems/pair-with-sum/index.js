function getPairsCount(arr, n, k) {
  let pairVal = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        pairVal.push([arr[i], arr[j]]);
      }
    }
  }
  return pairVal.length;
}

console.log(getPairsCount([1, 1, 1, 1], 4, 2));
