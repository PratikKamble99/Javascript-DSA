// Maximum avarage subarray with size k elements
// using 2 pointer O(n*k)
function solution(arr, k){
    let i = 0;
    let j = 0;
    let sum = 0;
    let avg = 0;
    while(i<k && j < arr.length){
        sum += arr[j]
        j++
        if(j-i == k){
            i++;
            j=i;
            avg = Math.max(avg, sum/k);
            sum = 0
        }
    }
    console.log(avg)
}

// Using Sliding Window O(n)
function solution2(arr, k){
    let sum = 0;
    let maxSum = 0;

    // get initial sum O(k)
    for (let i = 0; i < k; i++) {
        sum += arr[i];
        maxSum = sum  
    }

    let startIndx = 0;
    let endIndx = k
    
    // O(n-k)
    while( endIndx < arr.length){ // loop till endIndx each end of array
        sum-=arr[startIndx]; // remove fisrtIndx value from sum
        sum+=arr[endIndx]; // add endIndx value from sum
        maxSum = Math.max(maxSum, sum) // set maxSum 
        startIndx++; // increase startIndx
        endIndx++ // incease endIndx
    }
    console.log(maxSum/k)
}

solution2([1, 12, -5, -6, 50, 3], 4)