
// Brute
function twoSum1(nums, target){

  for (let i = 0; i < nums.length-1; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if(nums[i]+nums[j] == target){
        return [i, j]
      } 
    }
  }
  return -1
}
// console.log(twoSum1([2, 17, 11, 7], 9));

// Optimal
// O(n) = nlogn
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

function twoSum2Pointer(nums, target){
  let start = 0;
  let end = nums.length-1;
  while(start <= end){
    const sum = nums[start]+nums[end];
    if(sum == target) return [start, end]
    else if(sum > target) end--
    else start++
  }
  return []

}

console.log(twoSum2Pointer([2, 7, 11, 15], 13));
