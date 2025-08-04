// reverse an array using recursion - two pointers
function reverse(arr) {
  function rec(l, r) {
    if (l >= r) return;
    [arr[l], arr[r]] = [arr[r], arr[l]];
    rec(l + 1, r - 1);
  }
  rec(0, arr.length - 1);
  console.log(arr);
}

// REVERSE AN ARRAY using recursion - single pointer
function reverse(arr) {
  function rec(i) {
    if (i >= arr.iength / 2) return;
    [arr[i], arr[arr.iength - i - 1]] = [arr[arr.iength - i - 1], arr[i]];
    rec(i + 1);
  }
  rec(0);
  console.log(arr);
}

reverse([1, 2, 3, 4, 5]);
