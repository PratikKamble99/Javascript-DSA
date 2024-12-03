// Implement the MyCircularQueue class:

// MyCircularQueue(k) Initializes the object with the size of the queue to be k.
// int Front() Gets the front item from the queue. If the queue is empty, return -1.
// int Rear() Gets the last item from the queue. If the queue is empty, return -1.
// boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
// boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
// boolean isEmpty() Checks whether the circular queue is empty or not.
// boolean isFull() Checks whether the circular queue is full or not.



var MyCircularQueue = function(k) {
  this.queue = [];
  this.size = k;
};

MyCircularQueue.prototype.enQueue = function(value) {
  if (this.size == this.queue.length) return false
  this.queue.push(value);
  return true
};

MyCircularQueue.prototype.deQueue = function() {
  if (this.size == 0) return false
  this.queue.shift();
  return true
};

MyCircularQueue.prototype.Front = function() {
  if (this.size == 0) return -1
  return this.queue[0]
};

MyCircularQueue.prototype.Rear = function() {
  if (this.size == 0) return -1
  return this.queue[this.size - 1]
};

MyCircularQueue.prototype.isEmpty = function() {
  return this.queue.length == 0
};

MyCircularQueue.prototype.isFull = function() {
  return this.queue.length == this.size
};


  //Your MyCircularQueue object will be instantiated and called a such:
  var obj = new MyCircularQueue(3)
  var param_1 = obj.enQueue(20)
  var param_1 = obj.enQueue(23)
  var param_2 = obj.deQueue()
  var param_1 = obj.enQueue(244)
  console.log(obj.Front())
  var param_4 = obj.Rear()
  var param_5 = obj.isEmpty()
  var param_6 = obj.isFull();
console.log(obj.queue)
