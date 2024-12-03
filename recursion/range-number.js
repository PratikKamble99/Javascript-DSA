// Ques 2 : Create an array with range of numbers
// Input:  start=1, end=5  ----->>>>>  Output:

// rangeOfNumbers(1,5) => [1,2,3,4,5]
// rangeOfNumbers(1,4) => [1,2,3,4]
// rangeOfNumbers(1,3) => [1,2,3]
// rangeOfNumbers(1,2) => [1,2]
// rangeOfNumbers(1,1) => [1]
// rangeOfNumbers(1,0) => []

function rangeOfNumbers(start, end) {
  if (start - 1 == end) return []
  const numbers = rangeOfNumbers(start, end - 1);
  numbers.push(end);
  return numbers
};

console.log(rangeOfNumbers(1, 5))



