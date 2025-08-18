// In merge sort we divide array into two parts recursively and then merge

// Without using inbuild methods

function mergesort(arr, low, high) {
  //base case
  if (low >= high) return;

  const mid = Math.trunc((low + high) / 2);

  // traverse throug left array
  mergesort(arr, low, mid);
  // traverse throug right array
  mergesort(arr, mid + 1, high);
  //merge both arrays
  Merge(arr, low, mid, high);
  
}

function Merge(arr, low, mid, high) {
  const temp = [];
  let left = low; // first element in left array
  let right = mid + 1; // first element in right array

  // compare both arrays elements
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  // if any elements remaining in left array
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  // if any elements remaining in right array
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
    
    
  for(let i = low; i <= high; i++){
    // It subatracts i - low while i is increasing by one ig. i=0 - low=0 == 0, i=1 - low=0 == 1 ...
    // temp index get increasing from 0 to high
    arr[i] = temp[i - low]
  }
}

mergesort([8, 5, 3, 4, 1, 2], 0, 5);


// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;

//   const mid = Math.floor(arr.length / 2);

//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// }

// function merge(left, right) {
//   const sortedArr = [];

//   while (left.length && right.length) {
//     if (left[0] > right[0]) {
//       sortedArr.push(right.shift());
//     } else {
//       sortedArr.push(left.shift());
//     }
//   }
//   return [...sortedArr, ...left, ...right];
// }

// console.log(mergeSort([8, 5, 3, 4, 1, 2]));
