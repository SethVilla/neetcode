class Node {
    constructor(val, prev = null, next = null) {
        this.val = val
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
        let newNode = new Node(value, this.tail.prev, this.tail)
        
        this.tail.prev.next = newNode
        this.tail.prev = newNode
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        let newNode = new Node(value, this.head, this.head.next)
        this.head.next.prev = newNode
        this.head.next = newNode
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.isEmpty()) {
            return -1
        }

        const popped = this.tail.prev
        popped.prev.next = this.tail
        this.tail.prev = popped.prev 

        return popped.val

    }

    /**
     * @return {number}
     */
    popleft() {
        if (this.isEmpty()) {
            return -1
        }

        const popped = this.head.next
        popped.next.prev = this.head
        this.head.next = popped.next 

        return popped.val
    }
}
