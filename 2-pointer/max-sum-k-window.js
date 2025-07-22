function maxSum(arr, k) {
  let sum = 0;
  let low = 0;
  let high = arr.length - 1 - k;

  while (high <= arr.length) {
    const temp = arr.slice(low, high).reduce((acc, cur) => acc + cur);
    if (sum < temp) sum = temp;
    low++;
    high++;
  }

  console.log(sum);
}

maxSum([1, 3, 2, 5, 1, 4, 9], 3);
