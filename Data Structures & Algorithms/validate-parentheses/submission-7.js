class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }

        const stack = []

        for (const char of s) {
            if (stack.length && pairs[char]) {

                if (pairs[char] === stack[stack.length -1]) {
                    stack.pop()
                } else {
                    return false
                }
                
            } else {
                stack.push(char)
            }
            console.log(stack)
        }

        return !stack.length
    }
}
