class MyDeque {
    myQueue = []
    constructor() {
    }

    /**
     * @return {boolean}
     */
    isEmpty(): boolean {
        if (this.myQueue.length < 1){
            return true;
        } else {
            return false;
        }
    }

    /**
     * @param {number} value
     */
    append(value: number): void {
        this.myQueue.push(value);
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value: number): void {
         this.myQueue.unshift(value);
    }

    /**
     * @return {void}
     */
    pop(): number {
        if (this.myQueue.length < 1){
            return -1;
        } else {
            return this.myQueue.pop();
        }
    }

    /**
     * @return {number}
     */
    popleft(): number {
        if (this.myQueue.length < 1){
            return -1;
        } else {
            return this.myQueue.shift();
        }
    }
}
