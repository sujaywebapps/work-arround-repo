// const snake = [
//     [1, 2, 3],
//     [6, 5, 4],
//     [7, 8, 9],
//     [12, 11, 10],
//   ];
let mainArr = [];
for (let r = 0; r < 4; r++) {
  let tempArr = [];
  const cond = r % 2 === 1;
  for (let c = cond ? 3 : 1; cond ? c >= 1 : c <= 3; cond ? c-- : c++) {
    tempArr.push(r * 3 + c);
  }
  mainArr.push(tempArr);
}
console.log(mainArr);
