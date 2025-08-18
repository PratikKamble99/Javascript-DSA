// smallest index such that arr[ind] > x


const nums = [1, 2, 3, 4, 5, 6, 8, 9];

function upperBound(nums, x){
    let low = 0;
    let high = nums.length-1;
    let ans = nums.length;

    while(low <= high){
        const mid = Math.floor((low+high)/2);
        if(nums[mid] > x){
            ans = mid
            high = mid - 1
        }else 
            low = mid + 1
    }
    console.log(ans)
}

upperBound(nums, 6)