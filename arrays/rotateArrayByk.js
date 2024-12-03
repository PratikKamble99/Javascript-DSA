// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

// Approach 1
// function rotateArrayByk(arr, k) {
//   const arrLength = arr.length;
//   if (arrLength > k) k = k % arrLength;

//   const leftArray = arr.splice(arrLength-k, arrLength)
//   arr.unshift(...leftArray);
//   return arr
// };

// Approach 2 :- using reversing array
function rotateArrayByk(arr, k) {
  const arrLength = arr.length;
  if (arrLength > k) k = k % arrLength;
  
  reverse(arr, 0, arrLength - 1)
  reverse(arr, 0, k - 1)
  reverse(arr, k, arrLength - 1)

  return arr

};

function reverse(num, left, right) {
  while (left < right) {
    temp = num[left];
    num[left] = num[right];
    num[right] = temp;
    left++;
    right--;
  }
}


console.log(rotateArrayByk([1, 2, 3, 4, 5], 3))