Promise.myAll = (promises) => {
  let response = [];
  return new Promise((resolve, reject) => {
    promises.forEach(async (sp, i) => {
      try {
        let res = await sp;
        response.push(res);
        if (i == promises.length - 1) {
          resolve(response);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
};

let p0 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p0 rejected after 1 sec");
  }, 1000);
});
let p1 = Promise.resolve("p1 resolved");
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolved after 2 sec");
  }, 2000);
});

Promise.myAll([p0, p1, p2]).then(
  (res) => {
    console.log("response", res);
  },
  (err) => {
    console.log("error", err);
  }
);
