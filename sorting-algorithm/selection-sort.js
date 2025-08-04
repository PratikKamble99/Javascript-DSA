// Given an array arr, use selection sort to sort arr[] in increasing order.

// in selection sort we select min value and we compares with all elements
// In this algorithm we select minimum value from the portion of the array and swap it with the first element of that portion.
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// Example: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[minIndex]) {
        minIndex = j + 1;
      }
    }

    if (arr[i] > arr[minIndex]) {
      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
