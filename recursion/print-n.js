function print1ToN(n, start = 1) {
  console.log(start);
  if (n == start) return;
  else print1ToN(n, start + 1);
}

// Using backtracking
function print1ToN(n) {
  if (n <= 0) return;
  else print1ToN(n - 1);
  console.log(n); // This means last call will print first
}

print1ToN(20);

function printNTo1(n) {
  console.log(n);
  if (n <= 1) return;
  else print1ToN(n - 1);
}
