class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const map = new Map()

        for (const str of strs) {

            const hash = Array.from({length: 26}, () => 0)

            for (const char of str) {
                const code = char.charCodeAt(0) - 97
                hash[code]++
            }

            if (!map.has(hash.toString())) {
                map.set(hash.toString(), [])
            }

            map.get(hash.toString()).push(str)


        }

        return [...map.values()]

    }
}
