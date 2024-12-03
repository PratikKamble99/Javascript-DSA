// Given an array nums sorted in non-decreasing order,
// return the maximum between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg,
// then return the maximum of pos and neg.

const maxPosNegCount = (nums) => {
  function maxNegative() {
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
      const mid = Math.ceil((low + high) / 2);

      if (nums[mid] < 0) {
        low = mid;
        // return
      } else {
        high = mid - 1;
      }
    }
    return nums[0] >= 0 ? 0 : low + 1;
  }

  function maxPos() {
    let low = 0;
    let high = nums.length - 1;

    // console.log(low, high)
    while (low < high) {
      const mid = Math.floor((low + high) / 2);

      if (nums[mid] > 0) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    return nums[nums.length - 1] <= 0 ? 0 : nums.length - low;
  }

  return Math.max(maxNegative(),maxPos())
};

maxPosNegCount([-2, -1, -1, -1, 0,0,0,0,0, 2, 3, 4, 1, 1]);
