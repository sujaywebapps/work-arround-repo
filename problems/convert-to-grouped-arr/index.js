//       Given an array and size 'N' , divide the array into subarrays where each subarray is of size N.
// Input : [1,2,3,4,5,6,7,8], N= 2  Output: [ [1,2], [3,4], [5,6], [7,8] ].    If N =3 , Output : [ [1, 2, 3], [4, 5, 6], [7, 8]]

function convertArr(arr, n) {
  let finalArr = [];
  let subArr = [];
  for (let i = 0; i < arr.length; i++) {
    subArr.push(i);
    if (subArr.length === n || i === arr.length - 1) {
      finalArr.push(JSON.parse(JSON.stringify(subArr)));
      subArr = [];
    }
  }
  return finalArr;
}
console.log(convertArr([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(convertArr([1, 2, 3, 4, 5, 6, 7, 8], 3));
