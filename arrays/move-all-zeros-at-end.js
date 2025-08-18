// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. 
// Note that you must do this in-place without making a copy of the array.

//Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeroAtEnd(arr){
    const n = arr.length;

    const temp = [];

    for(let i = 0; i<n; i++){
        if(arr[i] !== 0){
            temp.push(arr[i])
        }
    }

    for(let i = 0; i<n; i++){
        if(temp[i]){
            arr[i] = temp[i]
        }else{
            arr[i] = 0
        }
    }
    console.log(arr)
}

function moveZeroAtEnd2(arr){
    const n = arr.length;

    let insertPos = 0;

    for(let i = 0; i<n; i++){
        if(arr[i] !== 0){
            arr[insertPos] = arr[i]
            insertPos++
        }
    }

    while(insertPos < n){
        arr[insertPos] = 0;
        insertPos ++
    }

    console.log(arr)
}

// Using 2 pointers
function moveZeroAtEndOpt(nums){
    const n = nums.length;
    if(n == 1) return nums
    let j = -1;
    
    // Find first non-zero index
    for(let i =0; i<n; i++){
        if(nums[i] == 0){
            j = i;
            break;
        }
    }

    if(j == -1) return nums

    // check next is non zero -> if non-zero swap with zero and move ahead j
    for(let i = j+1; i<n; i++){
        if(nums[i] != 0){
            const temp = nums[j]
            nums[j] = nums[i];
            nums[i] = temp
            j++
        }
    }
    console.log(nums)
}

// moveZeroAtEnd([0,1,0,3,12])
// moveZeroAtEnd2([0,1,0,3,12])
moveZeroAtEndOpt([0,1,0,3,12, 0])