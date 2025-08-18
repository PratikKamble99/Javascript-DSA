function sortArray(nums) {
  let ones = 0;
  let twos = 0;
  let zeros = 0;

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) ++zeros;
    else if (nums[i] == 1) ++ones;
    else ++twos;
  }

  for (let i = 0; i < zeros; i++) {
    result.push(0);
  }
  for (let i = 0; i < ones; i++) {
    result.push(1);
  }
  for (let i = 0; i < twos; i++) {
    result.push(2);
  }

  console.log(result);
}

function sortArrayDFN(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] == 0) {
      const temp = nums[low];
      nums[low] = nums[mid];
      nums[mid] = temp;

      low++;
      mid++;
    } else if (nums[mid] == 1) {
      mid++;
    } else {
      const temp = nums[high];
      nums[high] = nums[mid];
      nums[mid] = temp;
      high--
    }
  }
  console.log(nums)
}

const nums = [1, 1, 0, 2, 0, 2];

sortArrayDFN(nums);
