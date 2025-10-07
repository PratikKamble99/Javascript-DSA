/* 
Given an array of numbers, write a function to find both the maximum and minimum elements in the array.

You must return both values — either as an object, array, or tuple.
Try to find them in a single traversal (O(n) time complexity).
 */

function solution(a){
    let max = a[0]
    let min = a[0]

    for (let i = 1; i < a.length; i++) {
        if(a[i] < min) min = a[i]
        if(a[i] > max) max = a[i]   
    }

    return {max, min}

}


console.log(solution([3, 5, 1, 8, -2, 7]))