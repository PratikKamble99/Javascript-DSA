// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

// You can you lower-bound approach for this

// smallest index such that arr[ind] >= x

const nums = [1, 2, 3, 4, 5, 6, 8, 9];

function insertPos(nums, x){
    let low = 0;
    let high = nums.length-1;
    let ans = nums.length;

    while(low <= high){
        const mid = Math.floor((low+high)/2);
        if(nums[mid] >= x){
            ans = mid
            high = mid - 1
        }else 
            low = mid + 1
    }
    console.log(ans)
}

insertPos(nums, 2)