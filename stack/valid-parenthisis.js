// Ques 2 : Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//          determine if the input string is valid.
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: "()"             ----->>>>>        Output: true
// Input: "([]{})"         ----->>>>>        Output: true
// Input: "(]"             ----->>>>>        Output: false

function validParenthisis(str) {
  const stack = [];

  for (i = 0; i < str.length; i++) {
    const char = str[i];
    if (char == "(" || char == "[" || char == "{") {
      stack.push(char)
    } else if (
      (char == ')' && lastEle(stack) == '(') || 
      (char == ']' && lastEle(stack) == '[') || 
      (char == '}' && lastEle(stack) == '{')
    ) {
      stack.pop();
    }

  }
  if (stack.length == 0) return true
  return false

};

function lastEle(stack) {
  return stack[stack.length - 1]
}

console.log(validParenthisis("([]{})"))
console.log(validParenthisis("()"))
console.log(validParenthisis("(]"))