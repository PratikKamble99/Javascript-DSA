// Implement a function mapAsyncLimit(arr, limit, asyncFn) that:

// Runs asyncFn on each item of arr.
// Only runs limit number of async operations concurrently.
// Returns a Promise that resolves to an array of results in the same order as input.
// Input:

// arr: Array of items.
// limit: Maximum number of concurrent async calls.
// asyncFn: Asynchronous function returning a promise.
// Output:

// A promise that resolves to an array of results after processing all inputs using asyncFn.
// Example Inputs & Outputs
// Example: delayFn = x => new Promise(resolve => setTimeout(() => resolve(x * 2), 100))
// await mapAsyncLimit([1, 2, 3, 4], 2, delayFn);
// Output: [2, 4, 6, 8]

// Example: limit = 1 behaves like sequential map
// await mapAsyncLimit([1, 2, 3], 1, delayFn);
// Output: [2, 4, 6]

function mapAsyncLimit(arr, limit, asyncFn) {
  // Your implementation
  return new Promise((resolve, reject) => {
    if (arr.length == 0) return resolve([]);

    let inProgress = 0;
    let index = 0;
    const result = [];

    function next() {
      if (index == arr.length && inProgress === 0) {
        return resolve(result);
      }

      while (index < arr.length && inProgress < limit) {
        const currentIndex = index++;
        inProgress++;
        asyncFn(arr[currentIndex])
          .then((res) => (result[currentIndex] = res))
          .catch((err) => reject(err))
          .finally(() => {
            inProgress--;
            next();
          });
      }
    }
    next();
  });
}

const delayFn = (x) =>
  new Promise((resolve) => setTimeout(() => resolve(x * 2), 100));

mapAsyncLimit([1, 2, 3, 4], 2, delayFn)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

module.exports = mapAsyncLimit;
