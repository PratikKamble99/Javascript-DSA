let n = 1634;
let sum = 0;
const power = String(n).length;

while (n > 0) {
  const rem = n % 10;
  n = Math.trunc(n / 10);
  sum = sum + Math.pow(rem, power);
}

console.log(sum);
