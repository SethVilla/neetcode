class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ""
        for (const str of strs) {
            encoded += `${str.length + '#' + str}`
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] != '#') {
                j += 1
            }
            const length = Number(str.slice(i, j))
            const slice = str.slice(j + 1, j + 1 + length)
            result.push(slice)
            i = j + 1 + length
        }

        return result
    }
}
