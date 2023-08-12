// const promise1 = Promise.reject(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'foo');
//   });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));