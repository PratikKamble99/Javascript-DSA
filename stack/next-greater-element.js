function solution(nums) {
  const stack = [];
  const res = Array.from({length: nums.length}).fill(-1);

  for (let i = nums.length - 1; i >= 0; i--) {
    const current = nums[i];

    while(stack.length && stack[stack.length-1] <= current){
        stack.pop()
    }

    if(stack.length) res[i] = stack[stack.length - 1];
    // const lastEle = stack[stack.length - 1];
    // if (lastEle > current) {
    //   res[i] = lastEle;
    // } else {
    //   while (stack.length != 0) {
    //     const last = stack.pop();
    //     if (last > current) {
    //       res[i] = last;
    //       stack.push(last);
    //       break;
    //     }
    //   }
    //   if (!res[i]) res[i] = -1;
    // }
    stack.push(current);
  }
  console.log(res);
}

solution([3, 1, 5, 2, 1, 0, 7, 9, 2, 3]);
