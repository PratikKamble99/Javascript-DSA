function sortZeroAndOnce(nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    if (nums[start] == 1) {
      if (nums[end] == 0) {
        [nums[end], nums[start]] = [nums[start], nums[end]];
        start++;
      }
      end--;
    } else {
      start++;
    }
  }
  console.log(nums);
}

sortZeroAndOnce([0, 1, 1, 0, 0, 1, 0, 1]);
