class MinStack {
    constructor() {
        this.stack = []
        this.min = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        
        this.stack.push(val)



        val = this.min.length ? Math.min(val, this.min[this.min.length - 1]) : val
        
        this.min.push(val)
       

 
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.min.pop()

    }

    /**
     * @return {number}
     */
    top() {
       return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1]
    }
}
