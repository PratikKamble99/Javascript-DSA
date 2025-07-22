// Ques 1 - Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ----->>>>>  Output: 34
// Input: [10, 5, 10]             ----->>>>>  Output: 5

// Approach 1
// const secondLargest = (arr) => {
//   // remove deuplicate elemnts then sort in desc order
//   const newArray = Array.from(new Set(arr)).sort((a, b)=>b-a);
//   if(newArray.length >= 2) return newArray[1]
//   else return -1
//   // console.log(newArray)
// };

// Approach 2
const secondLargest = (arr) => {
  let largest = arr[0];
  let secondLargest = largest;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

const second = secondLargest([12, 35, 1, 10, 34, 1]);
console.log(second);
