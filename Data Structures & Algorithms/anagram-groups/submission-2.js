class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(words) {

        const res = {}

        for (const word of words) {
            const count = new Array(26).fill(0)

            for (const char of word) {
                count[char.charCodeAt() - 97]++
            }


            if (!res[count]) {
                res[count] = []
            }

            console.log(res[count])

            res[count].push(word)

        }

        return Object.values(res)

    }
}
