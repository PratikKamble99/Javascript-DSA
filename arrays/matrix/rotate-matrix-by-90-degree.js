/* 
    You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
    You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

    Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [[7,4,1],[8,5,2],[9,6,3]]

*/

// brute force approach using extra space
// O(n^2) space + O(n^2) time
var rotate = function (matrix) {
    const n = matrix.length;
    const newMatrix = Array.from({ length: n }, () =>
        Array.from({ length: n }, () => 0)
    );

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            newMatrix[j][(n - 1) - i] = matrix[i][j]
        }
    }
    console.log(newMatrix)
};

// O(1) space approach + O(n^2) time
var rotateOpt = function (matrix) {
    const n = matrix.length;

    // transpose matrix
    for (let i = 0; i < n-1; i++) {
        for (let j = i+1; j < n; j++) {
            // const temp =  matrix[i][j];
            // matrix[i][j] = matrix[j][i];
            // matrix[j][i] = temp
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // console.log("transpose",matrix)

    for(let i = 0; i < n; i++){
        // reverseRow(matrix[i])
        matrix[i].reverse()
    }

    // function reverseRow(arr){
        // let i = 0;
        // let j = n-1;
        // while(i <= j){
        //     [arr[i],arr[j]] = [arr[j], arr[i]];
        //     i++
        //     j--
        // }
    // }
    // console.log(matrix)
};