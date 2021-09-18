function reverseWR(str) {
  var rs = "";
  if (str.length === 0) {
    return "";
  }
  const stringArr = str.split("");
  return stringArr.pop() + reverseWR(stringArr.join(""));
}

console.log(reverseWR("reverse"));

function reverseWR2(str) {
  if (str.length === 0) {
    return "";
  }
  return str[str.length - 1] + reverseWR2(str.slice(0, str.length - 1));
}

console.log(reverseWR("reverse try 2"));
