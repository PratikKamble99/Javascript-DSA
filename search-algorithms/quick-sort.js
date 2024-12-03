// Implement Quick sort

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[0];
    const leftArr = [];
    const rightArr = [];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

console.log(quickSort([4, 5, 3, 8, 1, 2]));
console.log(quickSort([2, 1, 6, 10, 4, 1, 3, 9, 7]));
