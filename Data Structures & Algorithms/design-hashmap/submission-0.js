class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
}

class MyHashMap {
    
    constructor() {
        this.map = Array.from({
            length: 10**4
        }, () => new Node(0,0))
    }

    hash(key) {
        return key % this.map.length
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let current = this.map[this.hash(key)]

        while (current.next) {
            if (current.next.key === key) {
                current.next.value = value
                return
            }
            current = current.next
        }
        current.next = new Node(key, value)

    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let current = this.map[this.hash(key)].next

        while (current) {
            if (current.key === key) {
                return current.value
            }
            current = current.next
        }
        return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let current = this.map[this.hash(key)]

        while (current && current.next) {
            if (current.next.key === key) {
                current.next = current.next.next
            }
            current = current.next
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
