import { Node } from "./node"

export class Queue {
    constructor() {
        this.head = null
    }

    enqueue(arr) {
        let lastNode = this.head
        if (lastNode == null) {
            this.head = new Node(arr)
            return
        }
        while(lastNode.next != null) {
            lastNode = lastNode.next
        }
        let newNode = new Node(arr)
        lastNode.next = newNode
    }
    
    dequeue() {
        let node = this.head
        if (node == null) return null
        let value = node.value
        this.head = node.next // make the head point to the next node
        return value
    }
}