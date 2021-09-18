function findDuplicate(str) {
  let duplicates = [];
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i + 1, str.length).indexOf(str[i]) !== -1) {
      duplicates.push(str[i]);
    }
  }
  return [...new Set(duplicates)];
}

console.log(findDuplicate("nalina"));
