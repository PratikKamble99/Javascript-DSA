// Implement memoize function

const memoize = (fn) => {
  let cache = {};

  return function(...args) {
    const n = args[0];
    if (n in cache) {
      console.log('from cache')
      console.log(cache, 'cache')
      return cache[n];
    } else {
      console.log(cache, 'cache')

      console.log('calculating')
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}

function squere(n) {
  return n * n;
}

const memoziedSquare = memoize(squere)

console.log(memoziedSquare(5))
console.log(memoziedSquare(7))
console.log(memoziedSquare(5))

console.log('------------------------------------')

function sumOfn(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++){
    sum += i;
  }
  return sum
    
}

const memoziedSum = memoize(sumOfn);

console.log(memoziedSum(5))
console.log(memoziedSum(7))
console.log(memoziedSum(5))
