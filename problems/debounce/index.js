function bdebounce(func, wait) {
  var timeout;
  return function executed() {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      func.apply(this, arguments);
    }, wait);
  };
}

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
function saveInput() {
  console.log("Saving data");
}
const processChange = debounce(() => saveInput());
