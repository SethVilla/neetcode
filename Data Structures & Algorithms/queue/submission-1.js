class Node {
    constructor(value, prev, next) {
        this.value = value
        this.prev = prev
        this.next = next
    }
}

class MyDeque {
    constructor() {
        this.head = new Node(0)
        this.tail = new Node(0)

        this.head.next = this.tail
        this.tail.prev = this.head

    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.head.next === this.tail
    }

    /**
     * @param {number} value
     */
    append(value) {
        const newNode = new Node(value, this.tail.prev, this.tail)
        this.tail.prev.next = newNode
        this.tail.prev = newNode
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const newNode = new Node(value, this.head, this.head.next)
        this.head.next.prev = newNode
        this.head.next = newNode

    }

    /**
     * @return {void}
     */
    pop() {
        if (this.isEmpty()) {
            return - 1
        }

        const popped = this.tail.prev

        this.tail.prev.prev.next = this.tail
        this.tail.prev = this.tail.prev.prev

        return popped.value
        
    }

    /**
     * @return {number}
     */
    popleft() {

        if (this.isEmpty()) {
            return - 1
        }

        const popped = this.head.next

        this.head.next = popped.next
        popped.next.prev = this.head
        
        return popped.value
    }
}
