// Ques 6 - Subsets ( Backtracking Algorithm using Recursion )
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Input: [1,2,3]  ----->>>>>  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Input: [0]      ----->>>>>  Output: [[],[0]]

const result = [];
const temp = [];

function subset(array, i) {
  if (i == array.length) return result.push([...temp]);  

  temp.push(array[i]);
  subset(array, i + 1);
  temp.pop();
  subset(array, i + 1);
}
subset([1, 2, 3, 4], 0)
console.log(result)
