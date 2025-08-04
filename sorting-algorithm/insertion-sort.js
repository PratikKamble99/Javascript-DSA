// Implement insertion sort
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]

// IN insertion sort we select some part of array and sort it

function insertionSort(arr){
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--
        }
        
        arr[ j + 1 ] = key;
    }

    return arr
}

console.log(insertionSort([5,2,3,1]))