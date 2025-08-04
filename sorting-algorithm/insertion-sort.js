// Implement insertion sort
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]

// IN insertion sort we select some part of array and sort it

// time complexity: O(n^2) - worst and average case
// best case: O(n) - when the array is already sorted
// space complexity: O(1)

function insertionSort(arr){
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let j = i;

        // if j = 0 then arr[j - 1] will be undefined and will throw error index out of bound
        while (j > 0 && arr[j - 1] > arr[j]) {
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
        }

    }

    return arr;
}

console.log(insertionSort([5,2,3,1, 100]))