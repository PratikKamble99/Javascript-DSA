const arr_1 = [1, 2, 3, 4, 5];
const arr_2 = [ 6, 7, 8];

// Brute force
function unionOfArrays(arr1, arr2) {
  const set = new Set();
  for (let i = 0; i < arr1.length; i++) {
    set.add(arr1[i]);
  }
  for (let i = 0; i < arr1.length; i++) {
    set.add(arr2[i]);
  }

  const union = [];
  set.forEach((ele) => union.push(ele));

  console.log(union);
}

function unionOfArraysOpt(arr1, arr2) {
  const union = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    // check in elemenet from both array
    if (arr1[i] <= arr2[j]) {
      // Check if already present or not
      if (union[union.length - 1] != arr1[i]) {
        union.push(arr1[i]);
      }
      i++;
    } else {
      if (union[union.length - 1] != arr2[j]) {
        union.push(arr2[j]);
      }
      j++;
    }
  }

  // if arr1 all gets insert in union then process remaining from arr2
  while (j < arr2.length) {
    if (union[union.length - 1] != arr2[j]) {
      union.push(arr2[j]);
    }
    j++;
  }
  
  while (i < arr1.length) {
    if (union[union.length - 1] != arr1[i]) {
      union.push(arr1[i]);
    }
    i++;
  }

  console.log(union);
}

// unionOfArrays(arr_1, arr_2)
unionOfArraysOpt(arr_1, arr_2);
