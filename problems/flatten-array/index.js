// [1,2,3,4,5,[6,[7]]] => [1,2,3,4,5,6,7]
export function flattenArray(a, r = []) {
  for (let i = 0; i < a.length; i++) {
    if (a[i].constructor == Array) {
      r = [...r, ...flattenArray(a[i])];
    } else {
      r.push(a[i]);
    }
  }
  return r;
}
console.log(flattenArray([1, 2, 3, 4, [5, 6, [7]]]));
