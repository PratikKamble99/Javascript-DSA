const promises = [Promise.resolve(2), new Promise((res, rej) => res(1))];

/* 
    If all resolve return result
    If any fails immidiataly reject with err


    Resolves if all promises resolved
    Rejects if any one promise rejected

*/

async function myPromisAll(promises) {
  const result = [];

  return new Promise((resolve, reject) => {
    if (promises.length == 0) return resolve([]);

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((res) => {
          // ]Promise.resolve(promises[i]): This create new promise is if value is thenable or if already resloved then keeps same
          result.push(res);
          if (i == promises.length - 1) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}
