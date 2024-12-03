class Node {
  data;
  next;
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head;
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      newNode.next = this.head;
      this.head = newNode;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    newNode.next = null;
  }

  addAt(data, index) {
    if (index < 0 || this.size() < index) return console.log("invalid index");

    const newNode = new Node(data);

    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  removeFirst() {
    if (!this.size()) return console.log("List is empty");

    if (this.size() == 1) return (this.head = null);

    let current = this.head;

    this.head = current.next;
  }

  removeLast() {
    if (!this.size()) return console.log("List is empty");

    let current = this.head;
    for (let i = 0; i < this.size() - 2; i++) {
      current = current.next;
    }

    console.log(current);

    current.next = null;
  }

  removeAt(index) {
    if (index < 0 || this.size() < index) return console.log("invalid index");

    if (index == 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  size() {
    let current = this.head;
    let count = 0;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  print() {
    if (!this.size()) return console.log("List is empty");
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const newLinkedList = new LinkedList();

newLinkedList.addFirst(10);
newLinkedList.addFirst(20);
newLinkedList.addFirst(30);
newLinkedList.addAt(100, 1);
newLinkedList.addAt(90, 1);
newLinkedList.addLast(9);
newLinkedList.removeFirst();
newLinkedList.removeAt(5);
newLinkedList.removeLast();
newLinkedList.print();
