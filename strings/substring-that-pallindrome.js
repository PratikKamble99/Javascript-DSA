// Find all substrings that are palindromes.

var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let sub = "";
    for (let j = i; j < s.length; j++) {
      sub += s[j];
      if (sub == sub.split("").reverse().join("")) {
        count++;
      }
    }
  }
  return count;
};
