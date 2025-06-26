function validatePalindrome(str) {
  const str1 = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverse = [...str1].reverse().join("");

  if (str1 === reverse) return true;
  return false;
}

console.log("Pratik");
print("Pratik");

//For the purpose of user debugging.
validatePalindrome("121");
