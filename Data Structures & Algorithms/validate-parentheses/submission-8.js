class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []

        const pairs = {
            '}' : '{',
            ')' : '(',
            ']' : '['
        }


        for (const char of s) {

            if (stack.length && pairs[char] === stack[stack.length -1]) {
                stack.pop()
            } else {
                stack.push(char)
            }
        }

        return !stack.length
    }

}
