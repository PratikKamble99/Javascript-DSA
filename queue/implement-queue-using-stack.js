// Ques 3 : Implement Queue using Stacks
// Implement a first in first out(FIFO) queue using only two stacks.
// The implemented queue should have all functions of queue(enqueue, front, dequeue, and empty).


var MyQueue = function() {
  this.s1=[];
  this.s2=[];
};

MyQueue.prototype.enqueue = function(x) {
  this.s1.push(x)
};

MyQueue.prototype.dequeue = function() {
  if(this.empty()) return 'Queue is empty';
  while(this.s1.length != 0){
    this.s2.push(this.s1.pop())
  }
  this.s2.pop();
  while(this.s2.length!=0){
    this.s1.push(this.s2.pop())
  }
};

MyQueue.prototype.peek = function() {
  return this.s1[0]
};

MyQueue.prototype.empty = function() {
  this.s1.length==0
};

 // Your MyQueue object will be instantiated and called as such:
 var myqueue = new MyQueue();

 myqueue.enqueue(10)
 myqueue.enqueue(30)
 myqueue.enqueue(40)
 var param_2 = myqueue.dequeue()
 myqueue.enqueue(50)
 var param_2 = myqueue.dequeue()
 var param_3 = myqueue.peek()
 var param_4 = myqueue.empty()

console.log(myqueue.s1, '---', param_3)
 