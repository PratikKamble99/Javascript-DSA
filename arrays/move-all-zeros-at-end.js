// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. 
// Note that you must do this in-place without making a copy of the array.

//Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeros(arr){
    let count = 0;
    
    for(let i = count; i < arr.length; i++){
        if(arr[i] != 0){
            arr[count] = arr[i]
            count ++
        }
    }
    while(count < arr.length){
        arr[count] = 0
        count++
    }
    
    console.log('Result',arr)
}

moveZeros([0, 2, 1, 3, 0 ,4])