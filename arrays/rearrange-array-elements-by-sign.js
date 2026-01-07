// https://leetcode.com/problems/rearrange-array-elements-by-sign/

/* 
    Problem Statement: There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.

    Example 1:
    Input:
    arr[] = {1,2,-4,-5}, N = 4
    Output:
    1 -4 2 -5
    Explanation: 
    Positive elements = 1,2
    Negative elements = -4,-5
    To maintain relative ordering, 1 must occur before 2, and -4 must occur before -5.


    Sol:
    input array contain equal num of ele every time
    ie. pos elements size = n/2
        neg elements size = n/2

        so Pos at even index
        and Neg at odd index 
*/

// BRUTE FORCE

function rearrangeArrayBrute(nums) {
  const pos = [];
  const neg = [];
  const res = [];

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] > 0) {
      pos.push(nums[index]);
    } else {
      neg.push(nums[index]);
    }
  }

  for (let i = 0; i < pos.length; i++) {
    res[2 * i] = pos[i];
    res[2 * i + 1] = neg[i];
  }

  return res;
}

var rearrangeArray = function (nums) {
  let posIndex = 0;
  let negIndex = 1;
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res[posIndex] = nums[i];
      posIndex = posIndex + 2;
    } else {
      res[negIndex] = nums[i];
      negIndex = negIndex + 2;
    }
  }
  return res;
};

/* 
    Variety 2
    if any numbers left after Pos or Neg completed push them at the end
*/

var rearrangeArray2 = function (nums) {
  let posIndex = 0;
  let negIndex = 1;
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res[posIndex] = nums[i];
      posIndex = posIndex + 2;
    } else {
      res[negIndex] = nums[i];
      negIndex = negIndex + 2;
    }
  }
  return res;
};
