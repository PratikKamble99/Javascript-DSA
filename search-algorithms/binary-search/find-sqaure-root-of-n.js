// find square root of number which floor of an answer

function squareroot(n, low, high, ans){
    if(low > high) return ans
    
    const mid = Math.trunc((low+high)/2);
    
    if(mid * mid <= n){
        ans = mid
        return squareroot(n, mid+1, high, ans)
    }else{
        return squareroot(n, low, mid-1, ans)
    }
}
const n = 28
console.log(squareroot(n, 1, n, 1))