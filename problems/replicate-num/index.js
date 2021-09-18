// replicate(3, 5) should return [5,5,5].
function replicate(time, num) {
  if (time <= 0) return [];
  return [...[num], ...replicate(time - 1, num)];
}
console.log(replicate(3, 5));
