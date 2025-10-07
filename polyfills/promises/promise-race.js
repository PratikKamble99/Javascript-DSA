/* 

    A new Promise that resolves or rejects with the value 
    or error of the first settled Promise in the input iterable.

    Resolves or Reject based on first result
    
*/

const promises = [Promise.resolve(2), new Promise((res, rej) => rej(1))];

function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((element) => {
      Promise.resolve(element)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  });
}

myPromiseRace(promises)
  .then((res) => console.log(res))
  .catch((err) => console.log("ERROR:", err));
