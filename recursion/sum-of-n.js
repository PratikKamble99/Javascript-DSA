// SUM OF N
function printSum(n) {
  if (n <= 1) return n;
  return n + printSum(n - 1);
}

console.log(printSum(3));
