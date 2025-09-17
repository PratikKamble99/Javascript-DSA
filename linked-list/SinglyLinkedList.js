// Singly linked list
// It consist -> head, Node -> 1. data, next
// Initially -> head = null, Node = { data: data, next: null}

// Add first
// Add last
// Add at
// Remove first
// Remove last
// Remove at
// Size

class Node {
    constructor(data, next){
        this.data = data
        this.next = next
    }
}

class SinglyLinkedlist {
    constructor(){
        this.head = null
    }

    addFirst(data){
        if(!data) return

        const newNode = new Node(data, this.head)

        this.head = newNode;
    }

    addLast(data){
        if(!data) return

        const newNode = new Node(data, null)

        // get last node
        let current = this.head;

        while(current.next){
            current = current.next
        }

        console.log(current)

        current.next = newNode
    }

    addAt(index){
        if(index < 0) return 

        let current = this.head;

        
    }

    print(){
        let current = this.head;

        let str = ''
        while(current){
            str+= '--->'+current.data
            current = current.next
        }

        console.log(str)
    }
}

const singlyLinkedList = new SinglyLinkedlist();

singlyLinkedList.addFirst(10)
singlyLinkedList.addFirst(20)
singlyLinkedList.addLast(30)
singlyLinkedList.addLast(40)

singlyLinkedList.print()


