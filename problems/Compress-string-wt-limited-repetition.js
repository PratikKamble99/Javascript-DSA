function compressString(str) {
  const result = {};
  let op = "";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i - 1]) {
      count++;
    } else {
      op += `${str[i]}${count}`;
    }
  }
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] in result) {
  //       result[str[i]] = ++result[str[i]];
  //     } else {
  //       result[str[i]] = 1;
  //     }
  //   }

  //   Object.entries(result).forEach(([key, value]) => {
  //     if (value <= 1) op += `${key}`;
  //     else if (value > 9) {
  //       let count = Math.floor(value / 9);
  //       let remainder = value % 9;
  //       // console.log(count, remainder)
  //       for (let i = 0; i < count; i++) {
  //         op += `${key}${9}`;
  //       }

  //       if (remainder > 0) {
  //         op += `${key}${remainder}`;
  //       }
  //     } else {
  //       op += `${key}${value}`;
  //     }
  //   });

  return op;
}

compressString("abbbcccaa");
module.exports = compressString;
