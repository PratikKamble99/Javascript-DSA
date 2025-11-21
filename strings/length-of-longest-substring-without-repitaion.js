function solution(a){
    let max = 0

    for (let i = 0; i < a.length; i++) {
        let sub = ''
        for (let j = i; j < a.length; j++) {
            const char = a[j]
            if(sub.includes(char)){
                max = Math.max(max, sub.length)
                break
            }
            sub+=char
        }
    }

    console.log(max)
    return max

}

var lengthOfLongestSubstring = function(s) {
    if(!s.length) return 0
    const obj = {};

    let left = 0;
    let right = 0;
    let max = 1;

    while(right < s.length){
        if(obj[s[right]] > -1){
            left = Math.max(obj[s[right]] + 1, left)
        }
        obj[s[right]]= right
        max = Math.max(right-left+1, max)
        right++
    }
    return max

};

solution("cadbzabcds");
solution("pwwkew");
solution("abcabcdd");
solution("bbbb");

/* 

  In TWo pointer problems or sliding window you take left and rigth, and increses right on every iteration and check if window valid or not.
  If window in invalid you increment left by one and checks again

*/
