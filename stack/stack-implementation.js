// STACK have 5 operations
// LIFO ( last in first out )
// 1) pop() :- remove element
// 2) push():- insert element
// 3) peek():- to know which element is at last position
// 4) isEmpty():- whether stack is empty or not
// 5) size():- return size of stack

// IMPLEMENTATION
class Stack {
  constructor(){
    this.stack = [];
  }

  push(element){
    return this.stack.push(element)
  }
  
  pop(){
    if(this.isEmpty()) return "stack is empty"
    return this.stack.pop()
  }

  peek(){
    if(this.isEmpty()) return "stack is empty"
    return this.stack[this.size()-1]
  }

  size(){
    return this.stack.length
  }

  isEmpty(){
    return this.size() == 0;
  }

  printStack(){
    return this.stack;
  }
}

const stack1 = new Stack();

console.log(stack1.push(12));
console.log(stack1.size());
console.log(stack1.push(20));
console.log(stack1.peek());
console.log(stack1.printStack());