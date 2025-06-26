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
  console.log(result);
  return execute(arr);
}

//For the purpose of user debugging.
flattenArray([1, [2, [3, 4], 5], 6]);
