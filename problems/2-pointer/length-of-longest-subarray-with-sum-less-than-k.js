function longestSubArr(arr, k) {
  let left = 0;
  let right = 0;

  let sum = 0;
  let maxLength = 0;

  while (right <= arr.length) {
    sum = sum + arr[right];
    // while (sum > k) { // use while loop when you want to find latest subarray but it has O(2n) complexity
    if (sum > k) {
      sum = sum - arr[left];
      left++;
    }

    if (sum <= k && maxLength <= right - left + 1) {
      maxLength = Math.max(maxLength, right - left + 1);
      console.log(maxLength, arr.slice(left, right + 1));
    }
    right++;
  }
}

longestSubArr([2, 5, 1, 7, 10], 14);
