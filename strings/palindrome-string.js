// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false

// palindrome number uses same logic
function palindromeNumber(number) {
  if (number < 0) return false;
  // using inbuild functions
  // const reverse = String(number).split('').reverse().join('')
  // return +reverse == number

  // without using inbuild
  let rev = 0;
  while (number > 0) {
    rem = number % 10;
    rev = rev * 10 + rem;
    number = Math.trunc(number / 10);
  }

  return rev == number;
}

console.log(palindromeNumber(212));

// Ques 3 - Palindrome String
function palindromeString(str) {
  function rec(l, r) {
    if (str[l] != str[r]) return false;
    if (l >= r) return true;
    return rec(l + 1, r - 1);
  }
  return rec(0, str.length - 1);
}

palindromeString("nayyan");
