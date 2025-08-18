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

// console.log(quickSort([4, 5, 3, 8, 1, 2]));
// console.log(quickSort([2, 1, 6, 10, 4, 1, 3, 9, 7]));


function qs(arr, low, high){
    if(low < high){
        // Returns you partition index
        const partition = fn(arr, low, high);

        qs(arr, low, partition-1)
        qs(arr, partition+1, high)
    }
}

function fn(arr, low, high){

    const pivot = arr[low];
    let i = low;
    let j = high;

    while(i<j){

        // find first large ele from array from left than pivot
        while(arr[i] <= pivot && i<=high-1) i++

        // find first small ele from array from right than pivot
        while(arr[j] > pivot && j>=low+1) j--

        // if i is not crossed then only swap numbers
        if(i<j){
            const temp = arr[i];
            arr[i] = arr[j]
            arr[j] = temp
        }
    }

    // swap pivot value it's correct index
    const temp = arr[low];
    arr[low] = arr[j]
    arr[j] = temp

    return j
}

const array = [4, 6, 2, 5, 7, 9, 1, 3]
qs(array, 0, array.length-1)
console.log(array)
