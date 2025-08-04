// GCD (Greatest Common Divisor) or HCF (Highest Common Factor) of two numbers

let num_1 = 12; // First number
let num_2 = 9; // Second number
let largest = 0; // Variable to store the GCD/HCF

// Brute force way: Check every number from 1 up to the smaller of num_1 and num_2
for (let i = 1; i <= Math.min(num_1, num_2); i++) {
  // If 'i' divides both numbers exactly, and is greater than current 'largest', update 'largest'
  if (num_1 % i == 0 && num_2 % i == 0 && largest < i) {
    largest = i;
  }
}

// More optimized way: Start from the largest possible divisor and go downwards
for (let i = Math.min(num_1, num_2); i >= 1; i--) {
  // If 'i' divides both numbers exactly, it's the GCD. Assign and break.
  if (num_1 % i == 0 && num_2 % i == 0) {
    largest = i;
    break; // No need to check smaller numbers
  }
}

console.log(largest); // Output the GCD/HCF

// Recursive approach to find GCD using Euclidean algorithm
// The Euclidean algorithm is an efficient method for finding the GCD of two numbers.
// It works on the principle that the GCD of two numbers also divides their difference.
// The algorithm repeatedly replaces the larger number by the difference of the numbers (or by the remainder when divided), until one of them becomes zero.
// The non-zero number at this point is the GCD.
function gcd(a, b) {
  if (a == 0) {
    console.log(b);
    return b;
  } else {
    gcd(Math.max(a, b) - Math.min(a, b), Math.min(a, b));
  }
}

// Recursive approach to find GCD using the modulo operation
// This is a more efficient version of the Euclidean algorithm.
// It uses the property that GCD(a, b) = GCD(b, a % a).
// The process continues until one of the numbers becomes zero, at which point the other number is the GCD.
function gcd(a, b) {
  if (a == 0) {
    console.log(b);
    return b;
  } else {
    gcd(Math.max(a, b) % Math.min(a, b), Math.min(a, b));
  }
}

// Another implementation of GCD using the modulo operation
function gcd(a, b) {
  while (a > 0 && b > 0) {
    if (a > b)
      a =
        a % b; // If a is greater, reduce it by the remainder of a divided by b
    else b = b % a; // If b is greater, reduce it by the remainder of b divided by a
  }

  if (a == 0) return b;
  return a;
}

gcd(12, 9);
