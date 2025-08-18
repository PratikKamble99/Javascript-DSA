function longestSunarrayWithSumBrute(nums, s){

    let maxSub = []
    let max = 0
    let maxLen = 0
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        
        let sub = []
        let len = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            sub.push(nums[j])
            len++
            if(max<=sum && sum == s && maxLen <= len){
                max = sum
                maxSub = sub
                maxLen = len
                break
            }   
        }
    }

    console.log(max, maxSub,maxLen)

}

longestSunarrayWithSumBrute([1, 2, 3, 1, 1, 1, 1, 2, 4], 6)