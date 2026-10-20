class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}


class MyLinkedList {
    constructor() {
        this.left = new Node(0)
        this.right = new Node(0)
        this.left.next = this.right
        this.right.prev = this.left
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        let curr = this.left.next

        while (curr && index > 0) {
            curr = curr.next
            index -=1
        }

        if (curr && curr.prev != this.left && index === 0) {
            return curr.prev.val
        }

        return -1


    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let curr = this.left.next

        while (curr && index > 0) {
            curr = curr.next
            index -= 1
        }

        if (curr && curr != this.right && index === 0) {
            return curr.val
        }

        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const newNode = new Node(val)
        let prev = this.left
        let next = this.left.next

        prev.next = newNode
        next.prev = newNode
        newNode.prev = prev
        newNode.next = next


    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        const newNode = new Node(val)
        let prev = this.right.prev
        let next = this.right

        prev.next = newNode
        next.prev = newNode
        newNode.next = next
        newNode.prev = prev
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        const newNode = new Node(val)

        let curr = this.left.next

        while (curr && index > 0) {
            curr = curr.next
            index -= 1
        }

        if (curr && index === 0) {
            let prev = curr.prev
            let next = curr

            
            prev.next = newNode
            next.prev = newNode
            newNode.prev = prev
            newNode.next = curr
        }


    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {

        let curr = this.left.next

        while (curr && index > 0) {
            curr = curr.next
            index -= 1
        }

        if (curr && curr != this.right && index === 0) {
            let prev = curr.prev
            let next = curr.next

            prev.next = next
            next.prev = prev
        }
    }
}
