/* 
    Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
    You must write an algorithm that runs in O(n) time.

    Example 1:
    Input: nums = [100,4,200,1,3,2]
    Output: 4
    Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
    
    Example 2:
    Input: nums = [0,3,7,2,5,8,4,6,0,1]
    Output: 9

    Example 3:
    Input: nums = [1,0,1,2]
    Output: 3
    
    Constraints:
    0 <= nums.length <= 105
    -109 <= nums[i] <= 109
*/

// O(n^2)
var longestConsecutiveBrute = function (nums) {
  let output = 0;

  for (let i = 0; i < nums.length; i++) {
    let count = 1;
    let next = nums[i] + 1;
    let indx = 0;
    while (indx < nums.length) {
      if (next == nums[indx]) {
        count += 1;
        next += 1;
        indx = 0;
      } else {
        indx += 1;
      }
    }
    output = Math.max(count, output);
    count = 1;
  }
  return output;
};

// O(n log n) due to sorting using built-in sort which has O(n log n) time complexity
// so O(n) + O(n log n) = O(n log n)
var longestConsecutiveBetter = function (nums) {
  let output = 0;

  nums.sort((a, b) => a - b);
  let count = 0;
  let lastSmallest = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (lastSmallest == nums[i] - 1) {
      lastSmallest = nums[i];
      count += 1;
    } else if (lastSmallest !== nums[i]) {
      lastSmallest = nums[i];
      count = 1;
    }
    output = Math.max(count, output);
  }
  return output;
};

// O(n) -> Using HashSet O(n) for adding n elements + O(n) for iterating through n elements = O(2n) = O(n)
var longestConsecutiveOptimal = function (nums) {
  let output = 0;
  const hashSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    hashSet.add(nums[i]);
  }

  for (let i of hashSet) {
    let count = 1;

    // If (ele - 1) present in set, then not the start of a sequence
    if (hashSet.has(i - 1)) continue;
    else {
      // If (ele - 1) not present in set, then is the start of a sequence
      let x = i;
      // Check for consecutive elements till (ele + 1) not present in set
      while (hashSet.has(x + 1)) {
        x += 1;
        count += 1;
      }
      output = Math.max(output, count);
      count = 1;
    }
  }

  return output;
};
