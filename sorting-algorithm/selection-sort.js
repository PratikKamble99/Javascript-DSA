// Given an array arr, use selection sort to sort arr[] in increasing order.

// in selection sort we select min value and we compares with all elements
// In this algorithm we select minimum value from the portion of the array and swap it with the first element of that portion.

// Time Complexity: O(n^2) - best case, average case, and worst case
// Space Complexity: O(1)
// Example: [10, 9, 8, 7] => [7, 8, 9, 10]

// Approach 1
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    // find min element index
    for (let j = i; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[minIndex]) {
        minIndex = j + 1;
      }
    }

    // swap min element with the first element of the unsorted portion
    if (arr[i] > arr[minIndex]) {
      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

// Approach 2
function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j<arr.length; j++){
            if(arr[j+1] < arr[i]){
                let temp = arr[j+1];
                arr[j+1] = arr[i]
                arr[i] = temp
            }
        }
    }
    
    console.log(arr)
}

console.log(selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
