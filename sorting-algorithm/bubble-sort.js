// Given an array, arr[]. Sort the array using bubble sort algorithm.
// Input: arr[] = [4, 1, 3, 9, 7]
// Output: [1, 3, 4, 7, 9]

// select maximum element and place it at the end of the array.
// in bubble sort we select adjacent elements and compares them if next < current and swap them.

// time complexity: O(n^2) - worst and average case
// best case: O(n) - when the array is already sorted
// space complexity: O(1)

function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

bubbleSort([4, 1, 3, 9, 7]);
