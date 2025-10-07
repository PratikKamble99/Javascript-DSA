/* 

Given an unsorted array of integers arr, find the length of the longest consecutive elements sequence.

A consecutive sequence is a sequence of numbers such that each number differs by exactly 1 from the previous number, regardless of their order in the array.

Your solution must run in O(n) time.

*/

function solution(a){
   const sorted = a.sort((a,b)=>a-b);
   let max = 0;

   for (let i = 0; i < sorted.length; i++) {
        let sub = []
        for (let j = i; j < a.length; j++) {
            if(sorted[j+1] - sorted[j] != 1) 
                break
            else sub.push(sorted[j])
            max = Math.max(sub.length, max)
        }
    
   }
   return max+1
    

}

console.log(solution([10, 5, 12, 3, 55, 30, 4, 11, 2, 6])) 