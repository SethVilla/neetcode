class Node {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = new Node(0)
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {

        let curr = this.head.next

        // 0->0->0->0->0

        // 

        while (curr && index > 0) {
            curr = curr.next
            index--
        }

        if (curr && index === 0) {
            return curr.val
        } 

        return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newNode = new Node(val)
        let prev = this.head
        let next = this.head.next

        prev.next = newNode
        newNode.next = next

    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let curr = this.head
        let newNode = new Node(val)

        while (curr && curr.next) {
            curr = curr.next
        }

        curr.next = newNode
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let curr = this.head
        while (curr && index > 0) {
            curr = curr.next
            index--
        }

        if (curr && curr.next && index === 0) {
            curr.next = curr.next.next

            return true
        }


        return false
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const values = []

        let curr = this.head.next

        while (curr) {
            values.push(curr.val)
            curr = curr.next
        }

        return values
    }
}
