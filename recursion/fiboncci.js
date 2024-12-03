
// Fibonacci series
// let fibonacci = (n) => {
//   let series = [0, 1];
//   for (let i = 2; i < n; i++) {
//     series[i] = series[i - 1] + series[i - 2]
//   }
//   return series;
// }

// WITH RECURSION
let fibonacci = (n) => {
  if(n<=1) return n
  // console.log(n)
  return fibonacci(n-1)+fibonacci(n-2);
}

console.log(fibonacci(4))
// console.log(fibonacci(4))
// console.log(fibonacci(6))
// console.log(fibonacci(7))
// console.log(fibonacci(10))

// Big-O
// O(n);

