// Doubly linked list allows traversal from both ends

class Node {
    prev;
    data;
    next;

    constructor(data){
        this.next = null;
        this.data = data;
        this.prev = null;
    }
}

class DoublyLinkedList {
    head;
    constructor(){
        this.head = null
    }

    addFirst(data){
        const newNode = new Node(data);
        if(this.size() == 0){
            this.head = newNode;
            return
        }

        // console.log(this.head)
        this.head = newNode;
        newNode.next = this.head.pev;
    }

    size(){
        let current = this.head;
        let count = 0;
        while (current) {
            count ++;
            current = current.next
        }
        return count;
    }

    print(){
        let current = this.head;

        while(current){
            console.log(current);
            current = current.next
        }
    }
}

const newDoublyLinkedList = new DoublyLinkedList();

newDoublyLinkedList.addFirst(20);
newDoublyLinkedList.addFirst(30);
newDoublyLinkedList.print()