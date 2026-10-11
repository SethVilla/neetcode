class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {

        let res = ""

        for (let i in strs[0]) {
            const letter = strs[0][i]

            for (let word of strs) {
                if (i === word.length || word[i] !== letter ) {
                    return res
                }
            }

            res += letter
            
        }

        return res


    }
}
