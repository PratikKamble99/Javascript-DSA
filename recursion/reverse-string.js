// revser string with recursion

function reverseString(str) {
  if (str.length <= 0) return "";
  return reverseString(str.slice(1)) + str[0];
}

function reverseString2Pointers(str) {
  let start = 0;
  let end = str.length - 1;

  const s1 = str.split("");

  while (start <= end) {
    [s1[start], s1[end]] = [s1[end], s1[start]];
    start++;
    end--;
  }

  return s1.join("");
}

function reverseStringUsingStack(str) {
  const stack = [];
   let reverse = ''

    for(let i = 0; i < str.length; i++){
        stack.push(str[i])
    }

    while(stack.length != 0){
        reverse+=stack.pop()
    }
    
    return reverse
}

console.log(reverseString2Pointers("hello"));
console.log(reverseStringUsingStack("hello"));
