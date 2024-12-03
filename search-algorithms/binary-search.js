// binary sort is mostly used when data is in sorted manner. It uses two pointer method( low, mid and high )

// Ques 2: Implement Binary Search in JavaScript
// Given an array of integers nums which is sorted in ascending order, and an integer target,
// Write a function to search target in nums. If target exists, then return its index.
// Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [-1,0,3,5,9,12], target = 9  ----->>>>>  Output:  4
// Input: nums = [-1,0,3,5,9,12], target = 2  ----->>>>>  Output: -1

// O(log n)
function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (nums[middle] == target) return middle;
    else if (target < nums[middle]) end = middle - 1;
    else start = middle + 1;
  }

  return -1
}

console.log(binarySearch([-1,0,3,5,9,12], 19))

