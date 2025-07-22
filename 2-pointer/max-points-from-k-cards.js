arr = [6, 2, 3, 4, 7, 2, 1, 7, 1];

function maxPoints(array, k) {
  let leftSum = 0;
  let rightSum = 0;
  let MaxSum = 0;

  for (let i = k - 1; i >= 0; i--) {
    leftSum = MaxSum += array[i];
  }

  for (let i = 1; i <= k; i++) {
    leftSum = leftSum - array[k - i];
    rightSum = rightSum + array[array.length - i];

    MaxSum = Math.max(leftSum + rightSum, MaxSum);
  }

  console.log(MaxSum);
}

maxPoints(arr, 4);
