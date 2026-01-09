/* 
    Example 2:
    Input:
    arr = [10, 22, 12, 3, 0, 6]  
    Output:
    22 12 6  
    Explanation:
    6 is a leader because there are no elements after it.  
    12 is greater than all the elements to its right (3, 0, 6), and 22 is greater than 12, 3, 0, 6, making them leaders as well.
*/

function leadersInAnArray(arr){
    const leaders = [];

    for (let i = 0; i < arr.length; i++) {
        let leader = true;
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                leader = false
                break
            }
        }
        if(leader) leaders.push(arr[i])
    }

    console.log(leaders)
}

/* 
    Approach
    1. loop through second last ele, as last element is always leader because there is no element after it.
    2. set last element as max
    3. check if before last element is greater, if greater means it largest from all next ele, so push it into leaders array and set max as before last ele
*/
function leadersInAnArrayOpt(arr){
    let max = arr[arr.length - 1]
    const leaders = [max];
    for(let i = arr.length -2; i>=0 ; i--){
        if(max < arr[i]) leaders.push(arr[i])
        max = Math.max(arr[i], max)
    }

    console.log(leaders)
}

leadersInAnArrayOpt([4, 7, 1, 0])
leadersInAnArrayOpt([10, 22, 12, 3, 0, 6])