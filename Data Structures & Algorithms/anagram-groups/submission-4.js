class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()

        for (let word of strs) {

            const hashKey = new Array(26).fill(0)

            for (let letter of word) {
                hashKey[letter.charCodeAt(0) - 97]++
            }

            const stringHash = hashKey.toString()

            if (!map.has(stringHash)) {
                map.set(stringHash, [])
            }


            map.get(stringHash).push(word)


        }

        return [...map.values()]

    }
}
