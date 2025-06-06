// Implement memoize function

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      // console.log("CACHED");
      return cache[key];
    }
    // console.log("CALCULATED");
    cache[key] = fn.apply(this, args);
    return cache[key];
  };
}

function squere(n) {
  return n * n;
}

const memoziedSquare = memoize(squere);

console.log(memoziedSquare(5));
console.log(memoziedSquare(7));
console.log(memoziedSquare(5));

console.log("------------------------------------");

function sumOfn(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const memoziedSum = memoize(sumOfn);

console.log(memoziedSum(5));
console.log(memoziedSum(7));
console.log(memoziedSum(5));
