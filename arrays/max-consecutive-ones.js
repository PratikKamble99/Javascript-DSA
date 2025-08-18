const nums = [1,1,0,1,1,1];

function maxConsecutiveOnes(nums){
    let max = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] == 1){
            count = count+1
            max = Math.max(count, max)   
        }else{
            count = 0
        }
    }
    console.log(max)
}

maxConsecutiveOnes(nums)