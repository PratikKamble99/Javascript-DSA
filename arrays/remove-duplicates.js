// Ques 3 - Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number of unique elements in nums.

// Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_]

// Approach 1
const removeDuplicates = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
  return arr;
};

// Approach 2
const removeDuplicates2 = (arr) => {
  return Array.from(new Set(arr));
};

// Approach 3
const removeDuplicates3 = (arr) => {
  if (arr.length <= 0) return 0;
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

// Approach 4

const removeDuplicates4 = (arr) => {
  return arr.filter((ele, index, self) => {
    if (self.indexOf(ele) == index) return true;
    return false;
  });
};

console.log(removeDuplicates4([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
