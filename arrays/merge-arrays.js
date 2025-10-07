
/* 
You are given two arrays, and your task is to merge them into a single sorted array.
The merged array should contain all elements from both input arrays in ascending order.
If duplicates exist, they should be retained (i.e., not removed).
*/

function solution(a, b){
    const merge = [];
    let start1 = 0;
    let start2 = 0;

    while(start1 <= a.length-1 && start2 <= b.length-1){
        if(a[start1] < b[start2]){
            merge.push(a[start1])
            start1++;
        }else{
            merge.push(b[start2])
            start2++;
        }
    }

    while(start1 <= a.length-1) {
        merge.push(a[start1])
        start1++
    }

    while(start2 <= b.length-1) {
        merge.push(b[start2])
        start2++
    }

    return merge

}

arr1 = [1, 3, 5, 7];
arr2 = [2, 4, 6, 8];

console.log(solution(arr1, arr2))