const nums = [1, 2, 3, 4, 8, 8, 8, 8];

function lowerBound(nums, x) {
  let low = 0;
  let high = nums.length - 1;
  let ans = nums.length;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] >= x) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return ans;
}

function upperBound(nums, x) {
  let low = 0;
  let high = nums.length - 1;
  let ans = nums.length;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] > x) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return ans;
}

function findFirstAndLastIndex(nums, x) {
  const first = lowerBound(nums, x);

  if (first == nums.length || nums[first] !== x) return [-1, -1];
  else return [first, upperBound(nums, x) - 1];
}

function solution(nums, target) {
  let start = 0;
  let end = nums.length-1;
  const indexes = [];
  if(nums[end] == target) nums.push(end)
  if(nums[start] == target) nums.push(start);

  if(indexes.length == 2) return indexes
  while (start < end) {
    const mid = Math.trunc((start + end) / 2);
    if (nums[mid] == target && nums[mid - 1] < target) {
      indexes.push(mid);
      break;
    } else if (nums[mid] >= target) end = mid - 1;
    else start = mid + 1;
  }

  start = 0;
  end = nums.length;

  while (start <= end) {
    const mid = Math.trunc((start + end) / 2);

    if (nums[mid] == target && nums[mid + 1] > target) {
      indexes.push(mid);
      break;
    } else if (nums[mid] <= target) {
      start = mid + 1;
    } else end = mid - 1;
  }
  return indexes;
}

console.log(solution(nums, 8));
