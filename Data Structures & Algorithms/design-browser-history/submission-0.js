class Node {
    constructor(url, next = null, prev = null) {
        this.url = url
        this.next = next
        this.prev = prev
    }
}

class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.current = new Node(homepage)
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        this.current.next = new Node(url, null, this.current)
        this.current = this.current.next
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        
        while (this.current.prev && steps > 0) {
            this.current = this.current.prev
            steps -= 1
        }

        return this.current.url
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        
        while (this.current.next && steps > 0) {
            this.current = this.current.next
            steps -= 1
        }

        return this.current.url
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
