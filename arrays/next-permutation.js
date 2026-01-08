/* 
    Problem Statement: Given an array Arr[] of integers, rearrange the numbers of the given array into the lexicographically next greater permutation of numbers.
    If such an arrangement is not possible, it must rearrange to the lowest possible order (i.e., sorted in ascending order).

    Input: Arr[] = {1,3,2}
    Output: {2,1,3}
    Explanation: All permutations of {1,2,3} are {{1,2,3} , {1,3,2}, {2,13} , {2,3,1} , {3,1,2} , {3,2,1}}. So, the next permutation just after {1,3,2} is {2,1,3}.
    Input : Arr[] = {3,2,1}
    Output: {1,2,3}
    Explanation : As we see all permutations of {1,2,3}, we find {3,2,1} at the last position. So, we have to return the lowest permutation.

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var nextPermutation = function (nums) {
  let index = -1;
  let n = nums.length;

  // Traverse from the end and find the first index where the current digit is smaller than the next one (this is the "breaking point").
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      index = i;
      break;
    }
  }

  // If no such breaking point exists (entire array is descending), just reverse the whole array.  for (let i = n - 2; i >= 0; i--) {
  if (index == -1) return nums.reverse();

  // Then again traverse from the end to find the first digit greater than the breaking point digit and swap them.
  for (let i = n - 1; i >= 0; i--) {
    if (nums[index] < nums[i]) {
      [nums[index], nums[i]] = [nums[i], nums[index]];
      break;
    }
  }

  // Finally, reverse the part of the array to the right of the breaking point to get the smallest next permutation.
  let left = index + 1;
  let right = n - 1;

  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }

  console.log(nums);
};
