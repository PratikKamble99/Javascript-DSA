// Find the maximum sum subarray.
// using Kadane’s algo

// O(n^2)
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let subArray = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum = sum + nums[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
};

// O(n)
function maxSumSubarray(nums) {
  let maxSum = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > maxSum) maxSum = sum;
    if (sum < 0) sum = 0;
  }
  return maxSum;
}
