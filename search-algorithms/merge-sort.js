// In merge sort we divide array into two parts recursively and then compare

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right)
    
}

function merge(left, right){
    const sortedArr = [];

    while (left.length && right.length) {
        if(left[0] > right[0]){
            sortedArr.push(right.shift())
        }else{
            sortedArr.push(left.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}

console.log(mergeSort([8, 5, 3, 4, 1, 2]))