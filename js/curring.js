function curry(fn) {
  return function curried(...args) {
    // console.log(args.length, fn.length);
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2, 6)); // → 6
// console.log(curriedSum(1, 2)(3)); // → 6
// curriedSum(1)(2, 3); // → 6
// curriedSum(1, 2, 3); // → 6
