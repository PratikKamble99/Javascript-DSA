// Ques 1 : Given an input string s, reverse the order of the words

// Input: "the sky is blue"     ----->>>>>     Output: "blue is sky the"
// Input: "  hello world  "     ----->>>>>     Output: "world hello"
// Input: "a good   example"    ----->>>>>     Output: "example good a"

// APPROACH 1
function reveseWords(str) {
  return str.split(" ").reverse().join(" ");
}

// console.log(reveseWords("the sky is blue"));

// APPROACH 2
function reveseWords2(str) {
  const splitedStr = str.split(" ");
  const stack = [];

  // for( let i in splitedStr){
  for (let i of splitedStr) {
    // stack.push([splitedStr[i]])
    stack.push(i)
  }

  let finalStr = '';

  while (stack.length !== 0) {
    const currentWord = stack.pop();
    if (currentWord) {
      finalStr = finalStr + " " + currentWord
    }
  }

  return finalStr.trim();
}

console.log(reveseWords2("the sky is blue"));
console.log(reveseWords2("  hello world  "));
console.log(reveseWords2("a good   example"));



