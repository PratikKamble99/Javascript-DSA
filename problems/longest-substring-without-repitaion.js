// Input: "abcabcb"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.

function subString(str) {
  // console.log(str)
  let longest = "";
  let temp = "";
  for (let i = 0; i < str.length - 1; i++) {
    if (temp.includes(str[i])) {
      temp = str[i];
    } else {
      temp = temp + str[i];
    }

    if (temp.length > longest.length) {
      longest = temp;
    }
  }
  console.log(longest, "---");
}

subString("pwwkew");
subString("abcabcdd");
subString("bbbb");
