class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
                const stack = []

        for (const token of tokens) {
            if (token === '+') {
                stack.push(stack.pop() + stack.pop())
            } else if (token === '-') {
                const b = stack.pop()
                const a = stack.pop()
                console.log(b, a)
                stack.push(a - b)
            } else if (token === '*') {
                stack.push(stack.pop() * stack.pop())
            } else if (token === '/') {
                console.log(stack)
                const b = stack.pop()
                const a = stack.pop()
                stack.push(Math.trunc(a / b))
            } else {
                stack.push(Number(token))
            }
        }
        return stack.pop()
    }
}
