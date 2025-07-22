const arr = [[1, 2], [3, [4, 5]], 6]; // ---> O/P [1, 2, 3, 4, 5, 6]

// APROACH - 1
function flattenArray(arr) {
  const result = [];

  const execute = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        execute(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  };

  return execute(arr);

  // execute(arr);
  // return result;
}

// APROACH - 2
function flattenArray(arr, flatArray = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) flattenArray(arr[i], flatArray);
    else flatArray.push(arr[i]);
  }

  return flatArray;
}

console.log(flattenArray(arr));
