// https://www.hackerrank.com/challenges/countingsort1/problem

// APPRO-1
function countingSort(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (newArr[i] == undefined) newArr[i] = 0;
    if (newArr[arr[i]]) newArr[arr[i]] += 1;
    else {
      newArr[arr[i]] = 1;
    }
  }

  const trimmed = newArr
    .map((x, i) => (x > 0 ? i : -1))
    .reduce((a, b) => Math.max(a, b));
  return newArr.slice(0, Math.max(100, trimmed + 1));
}

// APPRO-2
function countingSort(arr) {
  const arr_2 = new Array(100).fill(0);

  for (let i = 0; i < arr.length; i++) {
    arr_2[arr[i]] += 1;
  }

  return arr_2;
}
