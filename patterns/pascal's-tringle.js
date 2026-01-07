/* 
        1
       1 1
      1 2 1
     1 3 3 1
    1 4 6 4 1

*/

function solution(n){
    const result = [];
    if(n==0) return result;

    const firstRow = [];
    firstRow.push(1)
    result.push(firstRow);

    // return 0th index because n=1
    if(n == 1) return result;

    // start from index 1 of result
    for (let i = 1; i < n; i++) {
        const nthRow = []
        const prevRow = result[i-1]; // fetch prev row data
        nthRow.push(1);

        // 
        for (let j = 0; j < i-1; j++) {
            nthRow.push(prevRow[j]+prevRow[j+1])
        }

        nthRow.push(1);
        result.push(nthRow)
    }

    return result

}

console.log(solution(6));
