// Ques 3 : Hamming Distance
// Given two strings x and y, return the Hamming distance between them.

// Input: x = "hello", y = "hwllr"
// Output: 2
// Explanation:
//   (hello)
//   (hwllr)
//     ↑  ↑

function hammingDistnace(str1, str2) {
  if (str1.length != str2.length) return 0;
  let distance = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) distance += 1;
  }
  return distance;
}

console.log(hammingDistnace("hello", "hwllr"), "str");

// Hamming distance between bits of numbers
// Variation 2: Given two integers x and y, return the Hamming distance between thier bits.

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// function hammingDistnaceNumbers(num1, num2) {
//   x = num1.toString(2);
//   y = num2.toString(2);

//   if (x.length < y.length) while (x.length !== y.length) x = "0" + x;
//   else if (x.length > y.length) while (x.length !== y.length) y = "0" + y;

//   console.log(x, y);

//   let distance = 0;
//   // number.toString(2) --> converts number into binary number string
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] !== y[i]) distance += 1;
//   }
//   return distance;
// }

// console.log(hammingDistnaceNumbers(5, 10), "num");
