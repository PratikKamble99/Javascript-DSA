// Factorial on n numbers
// const factorial = (n) => {
//   let fact = 1;
//   for (i = n; i >=1; i--) {
//     fact = fact * i
//   }
//   return fact
// }

function factorial(n){
  if(n<=1) return n;
  return n * factorial(n-1)
}

// console.log(factorial(0))
// console.log(factorial(1))
console.log(factorial(5))