// Given an array arr, use selection sort to sort arr[] in increasing order.

// in selection sort we select min value and we compares with all elements 
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // let min = arr[i];
    let index = i
    for (let j = i; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[index]) {
        // index = arr[j + 1];
        index = j+1
      }
    }

    if (arr[i] > arr[index]) {
       let temp = arr[index]
        arr[index] = arr[i]
      arr[i] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
