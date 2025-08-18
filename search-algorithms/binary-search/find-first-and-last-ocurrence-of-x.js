
const nums = [1, 2, 3, 4, 8, 8, 8, 9];

function lowerBound(nums, x){
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
    return ans
}

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
    return ans
}


function findFirstAndLastIndex(nums, x){
    const first = lowerBound(nums, x);

    if(first == nums.length || nums[first] !== x) return [-1, -1]
    else return [first, upperBound(nums, x) - 1]
}

console.log(findFirstAndLastIndex(nums, 8))
