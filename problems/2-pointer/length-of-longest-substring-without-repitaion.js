function longestSubString(str) {
  const hash = new Map();
  let left = 0;
  let right = left;
  let maxLength = 0;
  let substr = "";

  while (right < str.length) {
    if (hash.has(str[right])) {
      if (hash.get(str[right]) >= left) {
        left = hash.get(str[right]) + 1;
      }
    }
    hash.set(str[right], right);
    let length = right - left + 1;

    if (maxLength < length) {
      maxLength = length;
      substr = str.slice(left, right + 1);
    }

    right++;
  }

  console.log(maxLength, substr);
}

longestSubString("cadbzabcds");
longestSubString("pwwkew");
longestSubString("abcabcdd");
longestSubString("bbbb");

/* 

  In TWo pointer problems or sliding window you take left and rigth, and increses right on every iteration and check if window valid or not.
  If window in invalid you increment left by one and checks again

*/
