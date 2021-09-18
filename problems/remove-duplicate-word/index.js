function removeDuplicateWord(duplicateSting) {
  let returnArr = [];
  const stringArr = duplicateSting.split(" ");
  stringArr.forEach((element) => {
    if (returnArr.indexOf(element) === -1) {
      returnArr.push(element);
    }
  });
  return returnArr.join(" ");
}
console.log(removeDuplicateWord("This is test test word")); // output: This is test word

function removeDuplicateWordWithSet(duplicateSting) {
  let stringArr = duplicateSting.split(" ");
  let uniqArr = [...new Set(stringArr)];
  return uniqArr.join(" ");
}

console.log(removeDuplicateWordWithSet("This is test test word")); // output: This is test word
