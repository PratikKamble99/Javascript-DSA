// floor = longest no. in array which is <= x
// floor = smallest no. in array which is >= x --> lower-bound index number


const nums = [10, 20, 30, 40, 50];

function floorAndCeil(nums, x){
    let low = 0;
    let high = nums.length-1;
    let ceil = nums.length-1;
    let floor = 0;

    while(low <= high){
        const mid = Math.floor((low+high)/2);
        if(nums[mid] >= x){
            ceil = mid
            high = mid - 1
        }else 
            low = mid + 1
    }
    low = 0;
    high = nums.length-1;;
    while(low <= high){
        const mid = Math.floor((low+high)/2);
        if(nums[mid] <= x){
            floor = mid
            low = mid+1
        }else 
            high = mid - 1
    }
    console.log(nums[ceil])
    console.log(nums[floor])
}

floorAndCeil(nums, 60)