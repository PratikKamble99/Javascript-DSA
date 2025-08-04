// Print all Divisors of number

let num = 36;
let result = [Math.sqrt(num)];
for (let i = 1; i < Math.sqrt(num); i++) {
  if (num % i == 0) {
    result.push(i);
    result.push(Math.trunc(num / i));
  }
}

console.log(result.sort((a, b) => a - b));
