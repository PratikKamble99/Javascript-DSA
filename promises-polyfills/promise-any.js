/* 

    This returned Promise resolves as soon as any of the input Promises fulfills (i.e., successfully resolves), 
    with the value of that fulfilled Promise. 

    If all of the Promises in the input iterable are rejected, 
    then the Promise returned by Promise.any() is rejected with an AggregateError. 

    This AggregateError is a special type of error that groups together the individual rejection reasons of all the input Promises. 

    IMP: Always retusn single resolved promise

    Resolves if any one promise resolved
    Rejects if all promises rejected

*/

const promises = [Promise.reject(2), new Promise((res, rej) => rej(1))];

function myPromiseAny(promises) {
  const errors = [];

  return new Promise((resolve, reject) => {
    promises.forEach((element) => {
      Promise.resolve(element)
        .then((res) => resolve(res))
        .catch((err) => {
          errors.push(err);

          if (errors.length == promises.length) {
            reject(new AggregateError(errors, "All promise rejected"));
          }
        });
    });
  });
}

myPromiseAny(promises)
  .then((res) => console.log(res))
  .catch((err) => console.log("ERROR:", err));
