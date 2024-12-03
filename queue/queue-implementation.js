// STACK have 5 operations
// FIFI( first in first out )
// 1) enqueue() :- insert element
// 2) dequeue():- remove element
// 3) front():- to know which element is at first position
// 4) isEmpty():- whether queue is empty or not
// 5) size():- return size of queue

// IMPLEMENTATION

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(ele) {
    this.queue.push(ele)
  }

  dequeue() {
    if (this.isEmpty()) return 'Empty queue'
    return this.queue.shift()
  };

  front() {
    if (this.isEmpty()) return 'Empty queue'
    return this.queue[0]
  }

  rear() {
    if (this.isEmpty()) return 'Empty queue'
    return this.queue[this.size()-1]
  }

  isEmpty() {
    return this.size() == 0
  }

  size() {
    return this.queue.length
  }

  printQueue(){
    return this.queue
  }
}

const myQueue = new Queue();

myQueue.enqueue(12);
myQueue.enqueue(32);
myQueue.enqueue(99);

myQueue.dequeue();

console.log(myQueue.front())
console.log(myQueue.rear())

console.log(myQueue.printQueue())
