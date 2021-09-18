//  Search JS object
function contains(obj, searchItem) {
  for (const key in obj) {
    if (typeOf(obj[key]) === "object") {
      return contains(obj[key], searchItem);
    }
    if (obj[key] === searchItem) {
      return true;
    }
  }
  return false;
}

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

let hasIt = contains(nestedObject, 44);
console.log(hasIt);
