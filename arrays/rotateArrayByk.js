// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

function rotateArrayBy1FromLeft(arr) {
  const temp = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;

  console.log(arr);
}

rotateArrayBy1FromLeft([1, 2, 3, 4, 5, 6, 7]);

// Rotate by K from left using reversing array
function rotateArrayBykFromLeft(arr, k) {
  const n = arr.length;
  if (n < k) k = k % n;

  reverse(arr, 0, k - 1); // reverse 0 -> k elements = [3, 2, 1, 4, 5, 6, 7 ]
  reverse(arr, k, n - 1); // reverse k -> n-1 elements = [3, 2, 1, 7, 6, 5, 4 ]
  reverse(arr, 0, n - 1); // reverse 0 -> n-1 elements = [4, 5, 6, 7, 1, 2, 3 ]

  return arr;
}

console.log(rotateArrayBykFromLeft([1, 2, 3, 4, 5, 6, 7], 3));

// Rotate by K from Right using reversing array
function rotateArrayBykFromRight(arr, k) {
  const n = arr.length;
  if (n < k) k = k % n;

  reverse(arr, 0, n - 1); // reverse 0 -> n-1 elements = [7, 6, 5, 4, 3, 2, 1]
  reverse(arr, 0, k - 1); // reverse 0 -> k elements = [5, 6, 7, 4, 3, 2, 1 ]
  reverse(arr, k, n - 1); // reverse k -> n-1 elements = [5, 6, 7, 1, 2, 3, 4 ]

  return arr;
}

function reverse(num, left, right) {
  while (left < right) {
    temp = num[left];
    num[left] = num[right];
    num[right] = temp;
    left++;
    right--;
  }
}

console.log(rotateArrayBykFromRight([1, 2, 3, 4, 5, 6, 7], 3));
