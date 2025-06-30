var twoSum = function (nums, target) {
  const hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    let sub = target - nums[i];
    if (hash.has(sub)) {
      return [hash.get(sub), i];
    }
    hash.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 17));
